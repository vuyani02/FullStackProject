import { test as setup } from '@playwright/test'
import { TEST_CREDS, STORAGE_STATE } from '../playwright.config'

/**
 * Runs once before the test suite. Logs in with test credentials
 * and saves the session cookie so all other specs can skip login.
 */
setup('authenticate', async ({ page }) => {
  await page.goto('/login')

  await page.getByLabel('Team name').fill(TEST_CREDS.teamName)
  await page.getByLabel('Username').fill(TEST_CREDS.username)
  await page.getByLabel('Password').fill(TEST_CREDS.password)
  await page.getByRole('button', { name: 'Sign In' }).click()

  await page.waitForURL('/dashboard')

  await page.context().storageState({ path: STORAGE_STATE })
})
