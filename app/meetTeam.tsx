import { useRouter } from 'expo-router';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import InnovoPFP from '../assets/images/InnovoLogo.png';
import pfp from '../assets/images/DefaultAvatar.png';

import topBar, { TopBar } from './index';
const pallete = {
  InnovoYellow: '#eeea09ff',
  dark: '#2c2c2cff',
  black: '#000000',
  bigBox: '#191919',
  accent: '#141414'
}

const windowWidth = Dimensions.get('window').width;
export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#272727' }}>
      <TopBar/>
      <View style={[styles.bigBox, {width: 200, height: 70, marginTop: 20}]}>
        <Text style={[styles.bigHeadText, {fontSize: 30}]}>Build Team: </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', maxWidth: windowWidth}}>
        <View style={[styles.bigBox, {width: 400, height: 100}]}>

        </View>
        <View style={[styles.bigBox, {width: 400, height: 100}]}>

        </View>
        <View style={[styles.bigBox, {width: 400, height: 100}]}>

        </View>
        <View style={[styles.bigBox, {width: 400, height: 100}]}>

        </View>
      </View>
      <View style={[styles.bigBox, {width: 230, height: 70, marginTop: 20}]}>
        <Text style={[styles.bigHeadText, {fontSize: 30}]}>Coding Team: </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', maxWidth: windowWidth}}>
        <Shadow distance={3} startColor={pallete.InnovoYellow} endColor={pallete.InnovoYellow} offset={[12,12]}>
        <View style={[styles.bigBox, {width: 400, height: 100, flexDirection: 'row', alignItems: 'center'}]}>
          <View style={styles.pfp}>
            <Image source={pfp} style={{width: 70, height: 70, borderRadius: 40}}/>
          </View>
          <Text style={styles.pfpName}>David Balzac</Text>
        </View>
        </Shadow>
        <View style={[styles.bigBox, {width: 400, height: 100}]}>

        </View>
        <View style={[styles.bigBox, {width: 400, height: 100}]}>

        </View>
        <View style={[styles.bigBox, {width: 400, height: 100}]}>

        </View>
        <View style={[styles.bigBox, {width: 400, height: 100}]}>

        </View>
      </View>
      <View style={[styles.bigBox, {width: 250, height: 70, marginTop: 20}]}>
        <Text style={[styles.bigHeadText, {fontSize: 30}]}>Outreach Team: </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', maxWidth: windowWidth}}>
        <View style={[styles.bigBox, {width: 400, height: 100}]}>

        </View>
        <View style={[styles.bigBox, {width: 400, height: 100}]}>

        </View>
        <View style={[styles.bigBox, {width: 400, height: 100}]}>

        </View>
        <View style={[styles.bigBox, {width: 400, height: 100}]}>

        </View>
      </View>

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
  bigHeadText: {
      fontSize: 40, 
      fontWeight: '500', 
      color: pallete.InnovoYellow, 
      marginBottom: 8 
  },

  bigStat: {
      fontSize: 100, 
      fontWeight: '700', 
      color: pallete.InnovoYellow, 
      textAlign: 'center',
      marginBottom: 0 
  },
  littleStat: {
      fontSize: 25, 
      fontWeight: '400', 
      color: pallete.InnovoYellow, 
      textAlign: 'center',
      marginBottom: 4
  },
  subText: {
      fontSize: 20, 
      fontWeight: '200', 
      color: pallete.InnovoYellow,
      paddingRight:20, 
      marginBottom: 2 
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
  bigBox: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: pallete.bigBox,
    borderRadius: 12,
    padding: 16,
  },
  pfp: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: pallete.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  pfpName: {
    fontSize: 20, 
    fontWeight: '400',
    marginLeft: 20, 
    color: pallete.InnovoYellow,
    paddingRight:20, 
    marginBottom: 2,
    
  }

});