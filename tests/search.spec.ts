import { test, expect } from '@playwright/test';

test('can search for "Statista" and click on statistic to see it', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByPlaceholder('Statistiken, Prognosen und Umfragen finden').click();
  await page.getByPlaceholder('Statistiken, Prognosen und Umfragen finden').fill('Statista');
  await page.getByRole('link', { name: 'Free Statistik Population of Austria: Cisleithania 1818-1910 Population of Austria: Cisleithania from 1818 to 1910 (in millions)' }).click();
  await expect(page.getByRole('heading', { name: 'Population of Austria: Cisleithania 1818-1910' })).toBeVisible();
});