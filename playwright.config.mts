import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/browser',
  fullyParallel: true,
  updateSnapshots: 'none',
  snapshotPathTemplate: '{testDir}/__screenshots__/{arg}{ext}',
  expect: {
    toHaveScreenshot: {
      animations: 'disabled',
      threshold: 0,
      maxDiffPixels: 0,
    },
  },
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    ...devices['Desktop Chrome'],
    browserName: 'chromium',
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1,
    locale: 'en-US',
    timezoneId: 'UTC',
    colorScheme: 'light',
    reducedMotion: 'reduce',
    baseURL: 'http://127.0.0.1:6006',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run preview-storybook -- --host 127.0.0.1',
    url: 'http://127.0.0.1:6006/iframe.html',
    reuseExistingServer: false,
  },
});
