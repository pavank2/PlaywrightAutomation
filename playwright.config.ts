import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  retries: 2,
  use: {
    trace: 'on-first-retry',
    channel: 'chrome',
  },
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },
  //   // {
  //   //   name: 'firefox',
  //   //   use: { ...devices['Desktop Firefox'] },
  //   // },
  //   // {
  //   //   name: 'webkit',
  //   //   use: { ...devices['Desktop Safari'] },
  //   // },
  // ],
};
export default config;