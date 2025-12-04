import { useRouter } from 'expo-router';

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

import topBar, { TopBar } from '../index';

const pallete = {
  InnovoYellow: '#eeea09ff',
  dark: '#2c2c2cff',
  black: '#000000'
}

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#272727' }}>
      <TopBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topbar: {
    flexDirection: 'row',
    backgroundColor: pallete.black,
    padding: 20
  },
  titleText: {
    fontSize: 20,
    color: pallete.InnovoYellow,
    fontWeight: "500"
  },
  headerText: {
    fontSize: 20,
    color: pallete.InnovoYellow,
    fontWeight: "500",
    paddingLeft: 30,
  },

  headerImage: {
    color: '#525252ff',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});