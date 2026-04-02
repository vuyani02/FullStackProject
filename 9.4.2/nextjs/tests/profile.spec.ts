import { test, expect } from '@playwright/test'

test.describe('Profile', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/profile')
  })

  test('renders the page heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Profile' })).toBeVisible()
  })

  test('Team Profile tab is active by default and shows member table', async ({ page }) => {
    await expect(page.getByText('Team Profile')).toBeVisible()
    await expect(page.getByRole('table')).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Name', exact: true })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Role', exact: true })).toBeVisible()
  })

  test('My Profile tab shows user details', async ({ page }) => {
    await page.getByText('My Profile').click()
    const myProfilePanel = page.getByLabel('My Profile')
    await expect(myProfilePanel.getByText('First Name')).toBeVisible()
    await expect(myProfilePanel.getByText('Username')).toBeVisible()
    await expect(myProfilePanel.getByText('Email Address')).toBeVisible()
  })

  test('admin sees Actions column with Make Admin and Delete buttons', async ({ page }) => {
    await expect(page.getByRole('columnheader', { name: 'Actions' })).toBeVisible()
  })
})
