import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'app-social',
  webDir: 'www',

  plugins: {
    FacebookLogin: {
      appId: '1174025107505497',
      appName: 'red-social-pro', 
    },
  },
};

export default config;

