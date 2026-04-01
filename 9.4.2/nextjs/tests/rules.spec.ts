import { test, expect } from '@playwright/test'

test.describe('Rules', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/rules')
  })

  test('renders the page heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Rule Management' })).toBeVisible()
  })

  test('renders active and deactivated rule sections', async ({ page }) => {
    await expect(page.getByText(/Active Rules/)).toBeVisible()
    await expect(page.getByText(/Deactivated Rules/)).toBeVisible()
  })

  test('renders rule category accordions', async ({ page }) => {
    await expect(page.getByText('Documentation')).toBeVisible()
    await expect(page.getByText('Testing')).toBeVisible()
    await expect(page.getByText('Security')).toBeVisible()
  })

  test('expanding a rule panel shows explanation fields', async ({ page }) => {
    // Click the first inner rule panel to expand it
    await page.getByText('README exists').click()
    await expect(page.getByText('What is it?')).toBeVisible()
    await expect(page.getByText('Why it matters')).toBeVisible()
    await expect(page.getByText('How to add it')).toBeVisible()
  })

  test('admin sees toggle switches', async ({ page }) => {
    // At least one switch should be visible for an admin user
    await expect(page.locator('.ant-switch').first()).toBeVisible()
  })
})
