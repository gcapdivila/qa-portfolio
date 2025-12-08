import { test as testBase } from "@playwright/test";
import { LoginPage } from "../../objects/ui/login.page";

export { expect } from "@playwright/test";

export const test = testBase.extend<{
    login: LoginPage
}>({
    login: async ({ page }, use) => {
        await use(new LoginPage(page));
    }
});
