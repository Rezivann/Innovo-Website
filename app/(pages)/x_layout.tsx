import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(pages)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* <<Stack.Screen name="(tabs)" options={{ headerShown: false }} />> */}
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="(pages)" options={{
          // Hide the header for this route
          headerShown: false,
        }}
      />
        <Stack.Screen name="explore" options={{title: 'Explore',}}/>
      </Stack>
      
    </ThemeProvider>
  );
}
