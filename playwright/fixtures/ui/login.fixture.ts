import { test as testBase } from "@playwright/test";
import { LoginPage } from "@objects/ui/login.page";

export { expect } from "@playwright/test";

export const test = testBase.extend<{
    login: LoginPage;
    loginAs: (user: any) => Promise<any>;
}>({
    login: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    loginAs: async({ login }, use) => {
        await use(async (user) => {
            return await login.loginAs(user);
        })
    }
});
