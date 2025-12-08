import { USERS } from '../fixtures/data/test-users';
import { test, expect } from '../fixtures/ui/login.fixture';

test('has title', async ({ page, login }) => {
  await page.goto('/login.html');
  await login.loginAs(USERS.admin);
});

