import { test, expect } from '@playwright/test';

test('home page renders', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('SELIM UI')).toBeVisible();
});
