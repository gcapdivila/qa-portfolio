import { test as testBase } from "@fixtures/ui/header.fixture";
import { TablePage } from "@objects/ui/table.page";

export { expect } from "@fixtures/ui/header.fixture";

export const test = testBase.extend<{
    table: TablePage;
}>({
    table: async ({ page }, use) => {
        await use(new TablePage(page));
    }
});
