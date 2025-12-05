import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useRouter } from 'expo-router';

import { useColorScheme } from '@/hooks/use-color-scheme';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import InnovoPFP from '../assets/images/InnovoLogo.png';
import topBar from './index';


const pallete = {
  InnovoYellow: '#eeea09ff',
  dark: '#2c2c2cff',
  black: '#000000'
}

export const unstable_settings = {
  anchor: 'index',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* {<Stack>
        { <<Stack.Screen name="(tabs)" options={{ headerShown: false }} />> }
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="(pages)" options={{
          // Hide the header for this route
          headerShown: false,
        }}/>
        <Stack.Screen name="explore" options={{title: 'Explore',}}/>
      </Stack>} */}
      
      <Stack
        screenOptions={{
          headerShown: false,
          // also set default background so iOS push animations match
          contentStyle: { backgroundColor: '#303030ff' },
        }}
      />
    </ThemeProvider>

  );
}



