import { Page } from "@playwright/test";

export class TablePage {
    constructor(private page: Page) { }

    async addUser(name: string, role: 'Admin' | 'User' | 'Guest' ) {
        await this.page.getByRole('textbox', { name: 'Name (required)' }).fill(name);
        await this.page.getByRole('textbox', { name: 'Name (required)' }).selectOption(role);
        await this.page.getByRole('button', { name: 'Add' }).click()
    }

    async filterUserList(
        {name = "", role = "All roles", nbPerPage = 5}: 
        {name?: string, role?: 'All roles' | 'Admin' | 'User' | 'Guest', nbPerPage?: 5 | 10 | 20} = {}) {

            if (name) await this.page.getByRole('textbox', { name: 'Filter by name...' }).fill(name);
            this.page.locator('#filterRole').selectOption(role)
            this.page.locator('#pageSize').selectOption(`${nbPerPage} / page`)

    }

    async resetFilters() {
        this.page.getByRole('button', { name: 'Reset' }).click()
    }

    async previousPage() {
        this.page.getByRole('button', { name: 'Prev' }).click()
    }

    async nextPage() {
        this.page.getByRole('button', { name: 'Next' }).click()
    }

}