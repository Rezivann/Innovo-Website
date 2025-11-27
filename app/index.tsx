import { useRouter } from 'expo-router';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import InnovoPFP from '../assets/images/InnovoLogo.png';
import Insta from '../assets/images/InstaLogo.png';
import TT from '../assets/images/TTLogo.png';
import Youtube from '../assets/images/YTLogo.png';


import Michael from '../assets/images/Michael.jpg';

// #eeea09ff

const pallete = {
  InnovoYellow: '#e2e610ff',
  dark: '#2c2c2cff',
  black: '#000000',
  bigBox: '#191919'

  
}

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  //const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#272727' }}>
      <TopBar/>
      <ScrollView>
      <View style= {{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly',marginVertical: 30, marginHorizontal: 20, backgroundColor: '#272727'}}>
        <View style= {{backgroundColor: '#272727'}}>
          <View style={[styles.bigBox, {flex: 1, justifyContent: 'flex-start', alignSelf: 'flex-start', flexWrap: 'wrap', flexShrink: 1}]}>
            <Text style = {styles.bigHeadText}>About us</Text>
            <View style={{flexShrink: 1, flex: 1}}>
            <Text adjustsFontSizeToFit={true } style = {styles.subText}>Hello! We are First Tech Challenge Team 5477 Innovo, based in George W. Hewlett High School, New York.  We are committed to upholding our core value, innovation, in everything we do.  From constantly revising our design of our robot, to integrating new control structures in its software, we innovate our robot to overcome the challenges we are faced with.  We also work to shine bright and illuminate our communities with the wonders of STEM in the hopes that they too can innovate themselves.  </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 2}}></View>
        <View style={{alignSelf: 'center', backgroundColor: '#272727'}}>
          <View style={styles.bigBox}>
            <Image source={Michael} style={{flex: 1}}resizeMode="contain"/>
          </View>
        </View>
        <View style={{flex: 1}}></View>
      </View>
      <View style= {{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 30, marginHorizontal: 20}}>
        
          <View style={[styles.bigBox, {flex: 1 , alignItems: 'stretch'}]}>
            <View style={{justifyContent: 'center'}}>
              <Text style = {styles.bigHeadText}></Text>
            </View>
            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-evenly', paddingBottom: 20}}>
              
              <View style={{paddingHorizontal: 20, alignItems: 'center', flex: 2}}>
                <Text style = {styles.bigStat}>14</Text>
                <Text style = {styles.littleStat}>Seasons played</Text>
                
              </View>
              
              <View style={{ backgroundColor: pallete.InnovoYellow, width: 1}}></View>

              <View style={{paddingHorizontal: 20, alignItems: 'center', flex: 2}}>
                <Text style = {styles.bigStat}>16</Text>
                <Text style = {styles.littleStat}>Awards won since 2022</Text>
              </View>

              <View style={{ backgroundColor: pallete.InnovoYellow, width: 1}}></View>

              <View style={{paddingHorizontal: 20, alignItems: 'center', flex: 2}}>
                <Text style = {styles.bigStat}>15</Text>
                <Text style = {styles.littleStat}>Active Members</Text>
              </View>

              <View style={{ backgroundColor: pallete.InnovoYellow, width: 1}}></View>

              <View style={{paddingHorizontal: 20, flex: 2, alignItems: 'center'}}>
                <Text style = {styles.bigStat}>00</Text>
                <Text style = {styles.littleStat}>Seasons played</Text>
              </View>

            </View>
            
          </View>
        </View>
      
      <BottomBar/>
      </ScrollView>
    </SafeAreaView>

  );
}

export function BottomBar() {
  const router = useRouter();

  return (
    <View style={[styles.topbar, {height:75, alignItems: 'center', gap: 7,justifyContent: 'center',flexDirection: 'row'}]}>
        <TouchableOpacity onPress={() => router.push("https://www.instagram.com/innovo5477/")}>
          <Image source={Insta} style={{width: 30, height: 30}}resizeMode="contain"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("https://www.tiktok.com/@innovo5477")}>
          <Image source={TT} style={{width: 30, height: 30}}resizeMode="contain"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("https://www.youtube.com/@RoboticsInnovo5477")}>
          <Image source={Youtube} style={{width: 30, height: 30}}resizeMode="contain"/>
        </TouchableOpacity>
        {/*<TouchableOpacity onPress={() => router.push("/")}>*/}
          <Text style={{fontSize: 20, fontWeight: '200', marginLeft: 4, color: pallete.InnovoYellow}}>innovo912@gmail.com</Text>
        {/*</TouchableOpacity>*/}
    </View>
  );
}


export function TopBar() {

  const router = useRouter();

  return (
    <View>
      <View style={[styles.topbar, {justifyContent: 'space-between'}]}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={InnovoPFP} style={{width: 40, height: 40}}resizeMode="contain"/>
                <Text style={[styles.titleText, {marginLeft: 10}]}>Innovo</Text>
          </View>
        </TouchableOpacity>  
        <View style={{alignItems: 'center', flexDirection: 'row-reverse', }}>
          <TouchableOpacity onPress={() => router.push("/meetTeam")}>
            <Text style={styles.headerText}>Meet the Team</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Sponsors")}>
            <Text style={styles.headerText}>Sponsors</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/History")}>
            <Text style={styles.headerText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Events")}>
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
      marginBottom: 2,
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