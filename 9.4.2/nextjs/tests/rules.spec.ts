import { test, expect } from '@playwright/test'

test.describe('Rules', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/rules')
  })

  test('renders the page heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Rule Management' })).toBeVisible()
  })

  test('renders active and deactivated rule sections', async ({ page }) => {
    await expect(page.getByText(/Active Rules \(\d+\)/)).toBeVisible()
    await expect(page.getByText(/Deactivated Rules \(\d+\)/)).toBeVisible()
  })

  test('renders rule category accordions', async ({ page }) => {
    await expect(page.getByRole('button', { name: /Documentation/ })).toBeVisible()
    await expect(page.getByRole('button', { name: /Testing/ })).toBeVisible()
    await expect(page.getByRole('button', { name: /Security — \d+ rules?/ }).first()).toBeVisible()
  })

  test('expanding a rule panel shows explanation fields', async ({ page }) => {
    await page.getByText('README exists').click()
    await expect(page.getByText('What is it?')).toBeVisible()
    await expect(page.getByText('Why it matters')).toBeVisible()
    await expect(page.getByText('How to add it')).toBeVisible()
  })

  test('admin sees toggle switches', async ({ page }) => {
    await expect(page.locator('.ant-switch').first()).toBeVisible()
  })
})
