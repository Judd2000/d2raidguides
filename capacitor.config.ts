import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.j2k.d2raidguides',
  appName: 'd2raidguides',
  webDir: 'dist/d2raidguides/browser',
  server: {
    androidScheme: "d2raidguides"
  },
  plugins: {
    CapacitorCookies: {
      enabled: true,
    },
    CapacitorHttp: {
      enabled: true
    }
}
};

export default config;
