import { expect, Locator, Page } from "@playwright/test";

type RandomQuery = { by: 'random' }
type IdQuery = { by: 'id'; value: number | string }
type NameQuery = { by: 'name'; value: string }

type GetRowParams = IdQuery | NameQuery
type GetUserInfoParams = RandomQuery | IdQuery | NameQuery

type EditPatch = { newName?: string; newRole?: string }
type EditUserParams = GetRowParams & EditPatch

type UserInfo = { name: string; id: string }

type EditUserParam = 
    | { id: number | string, newName?: string, newRole?: string }
    | { name: string, newName?: string, newRole?: string }


export class TablePage {
    readonly rows: Locator;

    constructor(private page: Page) {
        this.rows = this.page.locator('tbody tr')
    }

    private getRow(params: GetRowParams) {
        if (params.by === 'id') 
            return this.page.locator(`tbody tr[data-id="${params.value}"]`);
        
        else 
            return this.rows.filter({ 
                has: this.page.locator('td:nth-child(2)', { hasText: params.value })
            });
    }

    async addUser(name: string, role: 'Admin' | 'User' | 'Guest' ) {
        await this.page.getByRole('textbox', { name: 'Name (required)' }).fill(name);
        await this.page.locator('#addRole').selectOption(role);
        await this.page.getByRole('button', { name: 'Add' }).click()
    }

    async filterUserList(
        {name = "", role = "All roles", nbPerPage = 5}: 
        {name?: string, role?: 'All roles' | 'Admin' | 'User' | 'Guest', nbPerPage?: 5 | 10 | 20} = {}) {

            const nameFilter = this.page.getByRole('textbox', { name: 'Filter by name...' });
            if (name) await nameFilter.fill(name);

            await this.page.locator('#filterRole').selectOption(role)
            await this.page.locator('#pageSize').selectOption(`${nbPerPage} / page`)

            if (name) {
                await expect(nameFilter).toHaveValue(name);

                await expect.poll(async () => {
                    const count = await this.rows.count();
                    if (count === 0) return true;
                    const names = await this.rows.locator('td:nth-child(2)').allInnerTexts();
                    return names.every(n => n.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
                }).toBe(true);
            }

    }

    async resetFilters() {
        await this.page.getByRole('button', { name: 'Reset' }).click()
    }

    async getIdFromUsername(username: string): Promise<string|null> {
        const row = this.getRow({ by: 'name', value: username})
        if ((await row.count()) === 0) return null;
        return await row.getAttribute('data-id')
    }

    async getUserInfo(params: GetUserInfoParams): Promise<UserInfo|null> {
        let row: Locator;

        if (params.by === 'random') {
            const count = await this.rows.count();
            if ( count === 0) return null;
            row = this.rows.nth(Math.floor(Math.random() * count));
        } else {
            row = this.getRow(params)
            if ((await row.count()) === 0) return null;
        }        

        const rowId = await row.getAttribute('data-id');
        const rowName = await row.locator('td:nth-child(2)').textContent();

        if (!rowId || !rowName) return null;
        return {name: rowName.trim(), id: rowId};
    }

    async editUser(params: EditUserParams) {
        const row = this.getRow(params)

        await row.getByRole('button', { name: 'Edit' }).click();

        if (params.newName) 
            await this.page.locator('input[name="editName"]').fill(params.newName);
        if (params.newRole) 
            await this.page.locator('select[name="editRole"]').selectOption(params.newRole);
        
        await this.page.getByRole('button', { name: 'Save' }).click()
    }

    async previousPage() {
        await this.page.getByRole('button', { name: 'Prev' }).click()
    }

    async nextPage() {
        await this.page.getByRole('button', { name: 'Next' }).click()
    }

}