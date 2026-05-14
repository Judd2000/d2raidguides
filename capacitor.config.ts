import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hamburger.d2raidguides',
  appName: 'd2raidguides',
  webDir: 'dist/d2raidguides/browser',
  server: {
    androidScheme: "d2raidguides"
  }
};

export default config;
