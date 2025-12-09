import { USERS } from '@fixtures/data/test-users';
import { test, expect } from '@fixtures/ui/login.fixture';
import { getUserFromLocalStorage } from '@helpers/local-storage';

test.describe('Verify login as a user', {tag: ['@login', '@smoke']}, () => {
  test.beforeEach('Open login page', async({ page }) => {
    await page.goto('/login.html');
  })

  test('Login as an admin', async ({ page, login }) => {
    await login.loginAs(USERS.admin);
    const user = await getUserFromLocalStorage(page);
    expect (user.user).toBe(USERS.admin.username);
  });

  test('Login as an editor', async ({ page, login }) => {
    await login.loginAs(USERS.editor);
    const user = await getUserFromLocalStorage(page);
    expect (user.user).toBe(USERS.editor.username);
  });

  test('Login as a guest', async ({ page, login }) => {
    await login.loginAs(USERS.user);
    const user = await getUserFromLocalStorage(page);
    expect (user.user).toBe(USERS.user.username);
  });

})
