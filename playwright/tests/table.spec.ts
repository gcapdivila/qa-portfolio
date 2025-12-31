import { USERS } from "@fixtures/data/test-users";
import { expect, test } from "@fixtures/ui/table-with-auth.fixture";

test.describe('Verify table page features for admin', () => {
    test.beforeEach('Login as admin and browse to table page', async ({ page, loginAs, header }) => {
        await page.goto('/login.html')
        await loginAs(USERS.admin)
        await header.goToTable()
    })

    test('Ability to add a new user', async ({ table }) => {
        await table.addUser("New User", "User")
        expect (await table.userExists("New User")).toBe(true)
    })
})