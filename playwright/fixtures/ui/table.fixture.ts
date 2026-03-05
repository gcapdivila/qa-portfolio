import { TablePage } from "@objects/ui/table.page";
import { test as testBase } from "./login.fixture";

export { expect } from "./login.fixture";

export const test = testBase.extend<{
    table: TablePage
}>({
    table: async ({ page }, use) => {
        await use(new TablePage(page));
    }
})