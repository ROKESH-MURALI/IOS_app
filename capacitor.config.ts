import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'co.in.healthsensei.HSapp',  // Use a reverse domain format based on your website
  appName: 'HSapp',                    // Your app's name
  webDir: 'www',                       // Directory where your built web app resides
  bundledWebRuntime: false,            // Set to true if you want to include the Capacitor web runtime
  server: {
    url: 'https://app.healthsensei.co.in', // Optional: Your app's URL for live reload during development
    cleartext: true                     // Optional: If you are using HTTP for development
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,              // Duration to show the splash screen (in milliseconds)
      launchAutoHide: true,                  // Automatically hide splash screen after duration
      backgroundColor: '#ffffff',            // Background color for splash screen
      androidSplashResourceName: 'splash',   // Name of splash resource in Android res folder
      iosSplashResourceName: 'Default',      // Name of splash resource in iOS assets
      showSpinner: false                     // Hide spinner on splash screen
    }
  }
};

export default config;
