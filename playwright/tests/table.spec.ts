import { USERS } from "@fixtures/data/test-users";
import { test, expect } from "@fixtures/ui/table.fixture";

test.beforeEach("Login and browse to table page", async({ page, loginAs, header}) => {
    await page.goto('/');
    await header.goToLogin()
    await loginAs(USERS.admin);
    await header.goToTable();
})

test.describe("Create / Edit user", () => {
    test("add a new user", async ({ table }) => {
        const username = "Gilles C";
        
        await table.addUser(username, "User");
        
        await table.filterUserList({ name: username });
        const userId = await table.getIdFromUsername(username);
        expect (userId).toEqual(expect.any(String));
    })

    test("edit an existing user", async ({ table }) => {
        const randomUser = await table.getUserInfo({ by: 'random' });
        test.skip(!randomUser, 'There are no user available in the grid');
        
        const newName = 'Edited Name';
        const newRole = 'Admin';
        await table.editUser({ by: 'id', value:randomUser!.id, newName, newRole });

        expect (await table.getIdFromUsername(newName)).toBe(randomUser!.id)
    })
})