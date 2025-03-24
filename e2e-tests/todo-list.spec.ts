import { test, expect } from '@playwright/test';

test.describe('Todo List E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000'); 
  });

  test('should add a new task', async ({ page }) => {
    await page.click('text=+');

    await page.fill('input[placeholder="Enter task name"]', 'Buy groceries');

    await page.click('text=Save');

    await expect(page.locator('text=Buy groceries')).toBeVisible();
  });

  test('should mark a task as completed', async ({ page }) => {
    await page.click('text=+');
    await page.fill('input[placeholder="Enter task name"]', 'Walk the dog');
    await page.click('text=Save');

    await page.click('input[type="checkbox"]');

    await expect(page.locator('text=1 of 1 tasks completed')).toBeVisible();
  });

  test('should delete a task', async ({ page }) => {
    await page.click('text=+');
    await page.fill('input[placeholder="Enter task name"]', 'Read a book');
    await page.click('text=Save');

    await page.click('[data-testid="delete-icon"]');

    await expect(page.locator('text=Read a book')).not.toBeVisible();
  });

  test('should edit a task', async ({ page }) => {
    await page.click('text=+');
    await page.fill('input[placeholder="Enter task name"]', 'Write code');
    await page.click('text=Save');

    await page.click('[data-testid="edit-icon"]');
    await page.fill('input[type="text"]', 'Write tests');
    await page.click('text=Save');

    await expect(page.locator('text=Write tests')).toBeVisible();
  });
});