import { useRouter } from 'expo-router';
import React, { useLayoutEffect, useState } from 'react';

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
import InnovoWide from '../assets/images/InnovoWide.png';
import InnovoWideNoLines from '../assets/images/InnovoWideNolines.png';


import teamPhoto from '../assets/images/TeamPhoto.png';
import NewMichael from '../assets/images/NewMichael.png';
import Michael from '../assets/images/Michael.jpg';
import { ImageBackground } from 'expo-image';

// #eeea09ff

const pallete = {
  InnovoYellow: '#e2e610ff',
  dark: '#2c2c2cff',
  black: '#000000',
  bigBox: '#191919'

  
}

const responsiveTextBox = () => {
  const width = Dimensions.get('window').width;
  return (
    <View style={{maxWidth: width*.4, flex: 1}}>
          <Text style = {styles.subText}>Hello! We are First Tech Challenge Team 5477 Innovo, based in George W. Hewlett High School, New York.  We are committed to upholding our core value, innovation, in everything we do.  From constantly revising our design of our robot, to integrating new control structures in its software, we innovate our robot to overcome the challenges we are faced with.  We also work to shine bright and illuminate our communities with the wonders of STEM in the hopes that they too can innovate themselves.  </Text>
    </View>
  );
};

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const statNums = 50;

const statSet = (width: number) => {
  if (width < 800) {
    return [45, 15];
  }
  else {
    return [100, 25];
  }
};

const titleSet = (width: number) => {
  if (width < 800) {
    return [14, 9];
  }
  else {
    return [20, 30];
  }
};

const imageSet = (width: number) => {
  if (width < 800) {
    return [14, 9];
  }
  else {
    return [20, 30];
  }
}; 


export default function HomeScreen() {
  //const windowWidth = Dimensions.get('window').width;
  
  const textbox = responsiveTextBox();
  const router = useRouter();
  const [width, height] = useWindowSize();
  const statNums = statSet(width);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#272727' }}>
      <TopBar/>
      <ScrollView>
      <ImageBackground source={NewMichael} resizeMode="cover" style={{minHeight: height, flex: 1, justifyContent: 'center'}}>
        <View style= {{marginBottom: height*.1,padding: 0.5, alignItems: 'center', backgroundColor: '#a2a0127c',justifyContent: 'center', alignSelf: 'center', shadowOffset: { width: 0, height: 0}, shadowColor: '#a2a0127c', shadowRadius: 10, elevation: 10, borderRadius: 40}}>
          <View style={[styles.bigBox, {marginHorizontal: 10, backgroundColor: '#000000',flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderRadius: 40, elevation: 20, }]}>
                <Image source={InnovoWide} style={{height: width*.17, width: width*.4}}resizeMode="contain"/>
                {/* {<Text style={[styles.titleText, {marginLeft: 10, fontSize: width*0.08, fontWeight: '500', color: '#fbcc0c'}]}>Innovo</Text>} */}
          </View>
        </View>
      </ImageBackground>


      {/* <View style= {{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between',marginVertical: 30, marginHorizontal: 20, backgroundColor: '#272727'}}>
        <View style= {{backgroundColor: '#272727'}}>
          <View style={[styles.bigBox, {flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
            <Text style = {styles.bigHeadText}>About us </Text>
            <View style={{}}>
            <Text  style = {[styles.subText, {flexShrink: 1}]}>Hello! We are First Tech Challenge Team 5477 Innovo, based in George W. Hewlett High School, New York.  We are committed to upholding our core value, innovation, in everything we do.  From constantly revising our design of our robot, to integrating new control structures in its software, we innovate our robot to overcome the challenges we are faced with.  We also work to shine bright and illuminate our communities with the wonders of STEM in the hopes that they too can innovate themselves.  </Text>
            </View>
            
          </View>
        </View>
      <View style={{flex: 0}}></View>
      <View style={{alignSelf: 'flex-end', alignItems: 'center', backgroundColor: '#272727', flex: 1}}>
        <View style={[styles.bigBox, {}]}>
          <Image source={Michael} style={{width: 400, height: 400}}resizeMode="cover"/>
        </View>
      </View>
      <View style={{flex: 0}}></View>
      </View> */}

      <View style= {{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 30, marginHorizontal: 20}}>
        
          <View style={[styles.bigBox, {flex: 1 , alignItems: 'stretch'}]}>
            <View style={{justifyContent: 'center'}}>
              <Text style = {styles.bigHeadText}></Text>
            </View>
            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-evenly', paddingBottom: 20}}>
              <View style={{paddingHorizontal: 30, alignItems: 'center', flex: 2}}>
                <Text style = {[styles.bigStat, {fontSize: statNums[0]}]}>14</Text>
                <Text style = {[styles.littleStat, {fontSize: statNums[1]}]}>Seasons played</Text>
                
              </View>
              
              <View style={{ backgroundColor: pallete.InnovoYellow, width: 1}}></View>

              <View style={{paddingHorizontal: 30, alignItems: 'center', flex: 2}}>
                <Text style = {[styles.bigStat, {fontSize: statNums[0]}]}>16</Text>
                <Text style = {[styles.littleStat, {fontSize: statNums[1]}]}>Awards won since 2022</Text>
              </View>

              <View style={{ backgroundColor: pallete.InnovoYellow, width: 1}}></View>

              <View style={{paddingHorizontal: 30, alignItems: 'center', flex: 2}}>
                <Text style = {[styles.bigStat, {fontSize: statNums[0]}]}>15</Text>
                <Text style = {[styles.littleStat, {fontSize: statNums[1]}]}>Active Members</Text>
              </View>

              <View style={{ backgroundColor: pallete.InnovoYellow, width: 1}}></View>

              <View style={{paddingHorizontal: 30, flex: 2, alignItems: 'center'}}>
                <Text style = {[styles.bigStat, {fontSize: statNums[0]}]}>00</Text>
                <Text style = {[styles.littleStat, {fontSize: statNums[1]}]}>Seasons played</Text>
              </View>

            </View>
            
          </View>
        </View>
      <View style={[styles.bigBox, {flex: 1, width: width*0.9, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 40}]}>
            <Text style = {styles.bigHeadText}>About us </Text>
            
            <Text  style = {[styles.subText, {textAlign: 'center'}]}>Hello! We are First Tech Challenge Team 5477 Innovo, based in George W. Hewlett High School, New York.  We are committed to upholding our core value, innovation, in everything we do.  From constantly revising our design of our robot, to integrating new control structures in its software, we innovate our robot to overcome the challenges we are faced with.  We also work to shine bright and illuminate our communities with the wonders of STEM in the hopes that they too can innovate themselves.  </Text>
            
      </View>

        <View style={[styles.bigBox, {justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 40, paddingHorizontal: 30, paddingVertical: 30}]}>

          <Image source={teamPhoto} style={{ height: width*0.5, width: width*0.57}}resizeMode="contain"/>
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

  const [width, height] = useWindowSize();

  const titleFonts = titleSet(width);
  return (
    <View>
      <View style={[styles.topbar, {justifyContent: 'space-between'}]}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={InnovoWide} style={{marginTop: 5, width: 125, height: 50}}resizeMode="contain"/>
                {/* {<Text style={[styles.titleText, {marginLeft: 10}]}>Innovo</Text>} */}
          </View>
        </TouchableOpacity>  
        <View style={{alignItems: 'center', flexDirection: 'row-reverse', }}>
          <TouchableOpacity onPress={() => router.push("/meetTeam")}>
            <Text style={[styles.headerText, {fontSize: titleFonts[0], paddingLeft: titleFonts[1]}]}>Meet the Team</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Sponsors")}>
            <Text style={[styles.headerText, {fontSize: titleFonts[0], paddingLeft: titleFonts[1]}]}>Sponsors</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/History")}>
            <Text style={[styles.headerText, {fontSize: titleFonts[0], paddingLeft: titleFonts[1]}]}>History</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => router.push("/Events")}>
            <Text style={[styles.headerText, {fontSize: titleFonts[0], paddingLeft: titleFonts[1]}]}>Events</Text>
          </TouchableOpacity> */}
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
      marginBottom: 8 , 
      alignSelf: 'center'
  },

  bigStat: {
      fontSize: statNums, 
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