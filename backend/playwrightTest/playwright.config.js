
const config = {
  use: {
    headless: false,
    viewport: {width: 1280, height: 720 }
  },

  projects: [
    {
      name: 'Chrome Stable',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
    {
      name: 'Safari',
      use: {
        browserName: 'webkit',
      }
    },
    {
      name: 'Firefox',
      use: {
        browserName: 'firefox',
      }
    },
  ],
};

module.exports = config;