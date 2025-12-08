import { Page } from "@playwright/test";
import { TestUser } from "../../fixtures/data/test-users";

export class LoginPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillUsername(username: string) {
        await this.page.getByRole('textbox', { name: 'Username' }).fill(username)
    }

    async fillPassword(password: string) {
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password)
    }

    async submitLogin() {
        await this.page.getByRole('button', { name: 'Login' }).click()
    }

    async isError(): Promise<boolean> {
        return (await this.page.getByText('Please enter both username').count()) > 0;
    }

    async loginAs(user: TestUser) {
        await this.fillUsername(user.username);
        await this.fillPassword(user.password);
        await this.submitLogin()
    }
}