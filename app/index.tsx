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
import Insta from '../assets/images/InstaLogo.png';
import Youtube from '../assets/images/YTLogo.png';
import TT from '../assets/images/TTLogo.png';


import Michael from '../assets/images/Michael.jpg';

import {Dimensions} from 'react-native';

const pallete = {
  InnovoYellow: '#eeea09ff',
  dark: '#2c2c2cff',
  black: '#000000',
  bigBox: '#191919'

  
}

export default function HomeScreen() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#272727' }}>
      <TopBar/>
      <ScrollView>
      <View style= {{flexDirection: 'row', justifyContent: 'space-evenly',marginVertical: 30, marginHorizontal: 20, backgroundColor: '#272727'}}>
        <View style= {{backgroundColor: '#272727'}}>
          <View style={[styles.bigBox, {maxWidth: (windowWidth/2) - (windowWidth/20), justifyContent: 'flex-start', alignSelf: 'flex-start', }]}>
            <Text style = {styles.bigHeadText}>About us</Text>
            <Text style = {styles.subText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dolor ante. Nullam feugiat egestas elit et vehicula. Proin venenatis, orci nec cursus tristique, nulla risus mattis eros, id accumsan massa elit eu augue. Mauris massa ipsum, pharetra id nibh eget, sodales facilisis enim.</Text>
          </View>
        </View>
        <View style={{flex: 1}}></View>
        <View style={{alignSelf: 'center', backgroundColor: '#272727'}}>
          <View style={styles.bigBox}>
            <Image source={Michael} style={{width: windowWidth/3, height: windowWidth/3}}resizeMode="contain"/>
          </View>
        </View>
        <View style={{flex: 1}}></View>
      </View>
      <View style= {{flexDirection: 'row', justifyContent: 'space-evenly',marginVertical: 30, marginHorizontal: 20, backgroundColor: '#272727'}}>
        <View style= {{backgroundColor: '#272727'}}>
          <View style={[styles.bigBox, {maxWidth: (windowWidth/2) - (windowWidth/20), justifyContent: 'flex-start', alignSelf: 'flex-start', }]}>
            <Text style = {styles.bigHeadText}>About us</Text>
            <Text style = {styles.subText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel dolor ante. Nullam feugiat egestas elit et vehicula. Proin venenatis, orci nec cursus tristique, nulla risus mattis eros, id accumsan massa elit eu augue. Mauris massa ipsum, pharetra id nibh eget, sodales facilisis enim.</Text>
          </View>
        </View>
        <View style={{flex: 1}}></View>
        <View style={{alignSelf: 'center', backgroundColor: '#272727'}}>
          <View style={styles.bigBox}>
            <Image source={Michael} style={{width: windowWidth/3, height: windowWidth/3}}resizeMode="contain"/>
          </View>
        </View>
        <View style={{flex: 1}}></View>
      </View>
      <View style={[styles.topbar, {height:75, alignItems: 'center', gap: 7,justifyContent: 'center',flexDirection: 'row'}]}>
        <TouchableOpacity onPress={() => router.push("https://www.instagram.com/")}>
          <Image source={Insta} style={{width: 30, height: 30}}resizeMode="contain"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("https://www.youtube.com/")}>
          <Image source={TT} style={{width: 30, height: 30}}resizeMode="contain"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("https://www.tiktok.com/")}>
          <Image source={Youtube} style={{width: 30, height: 30}}resizeMode="contain"/>
        </TouchableOpacity>
        {/*<TouchableOpacity onPress={() => router.push("/")}>*/}
          <Text style={{fontSize: 20, fontWeight: '200', marginLeft: 4, color: pallete.InnovoYellow}}>innovo912@gmail.com</Text>
        {/*</TouchableOpacity>*/}
      </View>
      </ScrollView>
    </SafeAreaView>

  );
}

function TopBar() {

  const router = useRouter();

  return (
    <View>
      <View style={[styles.topbar, {justifyContent: 'space-between'}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={InnovoPFP} style={{width: 40, height: 40}}resizeMode="contain"/>
          <Text style={[styles.titleText, {marginLeft: 10}]}>Innovo</Text>
        </View>
        <View style={{alignItems: 'center', flexDirection: 'row-reverse', }}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={styles.headerText}>Meet the Team</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={styles.headerText}>Sponsors</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={styles.headerText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={styles.headerText}>Events</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
      fontSize: 30, 
      fontWeight: '500', 
      color: pallete.InnovoYellow, 
      marginBottom: 8 
  },
  subText: {
      fontSize: 20, 
      fontWeight: '200', 
      color: pallete.InnovoYellow, 
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
  }

});