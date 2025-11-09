import {useRouter } from 'expo-router';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import InnovoPFP from '../assets/images/InnovoLogo.png';


const pallete = {
  InnovoYellow: '#eeea09ff',
  dark: '#2c2c2cff',
  black: '#000000'
}

export default function TabTwoScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#3d3d3dff' }}>
      <View style={[styles.topbar, {justifyContent: 'space-between'}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={InnovoPFP} style={{width: 40, height: 40}}resizeMode="contain"/>
          <Text style={[styles.titleText, {marginLeft: 10}]}>Innovo</Text>
        </View>
        <View style={{alignItems: 'center', flexDirection: 'row-reverse', }}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={styles.headerText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={styles.headerText}>Sponsors</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={styles.headerText}>Othersection</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>

      </ScrollView>
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
