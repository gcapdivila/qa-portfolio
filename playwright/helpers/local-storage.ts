import { Page } from "playwright/test";

export async function getUserFromLocalStorage(page: Page) {
    const role = await page.evaluate(() => localStorage.getItem("role"));
    const user = await page.evaluate(() => localStorage.getItem("user"));
    const token = await page.evaluate(() => localStorage.getItem("token"));
    return {role, user, token}
}

export async function waitForLogin(page: Page) {
    await page.waitForURL("**/actions.html");
}