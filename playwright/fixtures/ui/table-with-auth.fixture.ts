import { test as tableTest } from "@fixtures/ui/table.fixture";
import { test as loginTest } from "@fixtures/ui/login.fixture"
import { mergeTests } from "@playwright/test";

export const test = mergeTests(tableTest, loginTest)
export { expect } from "@fixtures/ui/table.fixture"