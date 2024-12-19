import { test, expect } from '@playwright/test';

test('AppHasAddButton', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const addButton = await page.locator('button:text("add")');
  await expect(addButton).toBeVisible();
});

test('AppCanSubtract', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Voer "7" in
  await page.fill('input[name="number1"]', '7');

  // Voer "3" in
  await page.fill('input[name="number2"]', '3');

  // Klik op de subtract-knop
  await page.click('button:text("subtract")');

  // Controleer of het resultaat correct is
  const result = await page.locator('#result');
  await expect(result).toHaveText('The result is: 4');
});
