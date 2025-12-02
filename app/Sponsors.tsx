import { useRouter } from 'expo-router';
import React, { useLayoutEffect, useState, useRef, use} from 'react';
import { motion } from 'framer-motion';

import { LinearGradient } from 'expo-linear-gradient';

import {
  Animated,
  Image,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Module,
  ImageSourcePropType,
  Pressable,
  Easing,
} from 'react-native';
import InnovoPFP from '../assets/images/InnovoLogo.png';

import FRCTees from '../assets/images/Sponsors/FRCTees.png';
import Haas from '../assets/images/Sponsors/Haas.png';
import Polymaker from '../assets/images/Sponsors/Polymaker.png';
import HWPSEF from '../assets/images/Sponsors/HWPSEF.png';

import circuitBg from '../assets/images/circuitBg.png';

import topBar, { TopBar } from './index';
import { BottomBar } from './index';

const pallete = {
  InnovoYellow: '#eeea09ff',
  dark: '#2c2c2cff',
  black: '#000000',
  bigBox: '#191919',
  accent: '#141414',
  bgColor: '#272727'
}
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
type Sponsor = {
    name: string;
    description: string;
    image: ImageSourcePropType;
    width: number;
    height: number;
}

const sponsors: Sponsor[] = [
    {name: 'FRCTees', description: 'They make all of our merch for the 2025-2026 season.', image: FRCTees, width: 250, height: 100},
    {name: 'Gene Haas Foundation', description: 'Their grant has removed former financial restrictions when building our robots.', image: Haas, width: 100, height: 100},
    {name: 'Polymaker', description: "They have given us filament to incorporate into our robot's design.", image: Polymaker, width: 250, height: 100},
    

]


const textSet = (width: number) => {
  if (width < 800) {
    return 0.85;
  }
  else {
    return 0.5;
  }
}; 



export default function HomeScreen() {
  const router = useRouter();
  const [width, height] = useWindowSize();

  const makeSmall = Boolean(width < 800);

  const widthFactor = textSet(width);

  const boxSet = (width: number) => {
    if (width < 800) {
      return 'auto';
    }
    else {
      return 900;
    }
  }; 
  const boxWidth = boxSet(width);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#272727' }}>
      <TopBar/>
      <ScrollView showsVerticalScrollIndicator={false}>
       <ImageBackground blurRadius={0} source={circuitBg} style={{height: height*.5, justifyContent: 'center'}}>
              <View style= {{flex: 1}}></View>
              <View style= {{padding: 0.5, alignItems: 'center', backgroundColor: '#a2a0127c',justifyContent: 'center', alignSelf: 'center', shadowOffset: { width: 0, height: 0}, shadowColor: '#a2a0127c', shadowRadius: 10, elevation: 10, borderRadius: 40}}>
                <View style={[styles.bigBox, {marginHorizontal: 10, backgroundColor: '#000000',flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderRadius: 40, elevation: 20, }]}>
                      <Text style={[styles.bigHeadText, {fontSize: 45, paddingHorizontal: 10, textDecorationLine: 'none'}]}>Sponsors</Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'column-reverse'}}>
                  <LinearGradient colors={['#27272700', '#272727']} style={{height: 100, width: 'auto'}} />
              </View>
        </ImageBackground>

      
      <View style={[styles.bigBox, {marginTop:  50, alignItems: 'center', alignSelf: 'center'}]}>
        <Text style={styles.headerText}>Thank you to all of our sponsors.  Your support is very appreciated and will help us get far this year!</Text>
      </View>
      {/* <View style={{flexDirection: 'row', marginVertical: 75,justifyContent: 'center', flexWrap: 'wrap', backgroundColor: pallete.bgColor}}>
        {sponsors.map((sponsor) => (
          <motion.button style={{backgroundColor: 'transparent', borderStyle: 'solid', borderColor: 'transparent'}} whileHover={{scale: 1.25}}>
            <Image source={sponsor.image} style={{width: sponsor.width, height: sponsor.height, marginHorizontal: 20}}/>
          </motion.button>
        ))}
      </View> */}
      
      {sponsors.map((sponsor) => (
          <View style={[styles.bigBox, {alignSelf: 'center', flexDirection: 'row', marginTop: 40 ,justifyContent: 'center', flexWrap: 'wrap'}]}>
            <View style={{maxWidth: width*widthFactor, paddingLeft: 10}}>
              <Text style = {styles.bigHeadText}>{sponsor.name}</Text>
                          
              <Text style = {styles.subText}>{sponsor.description}</Text>
            </View>
            <View style={{flex: 1}}></View>
            <motion.button style={{backgroundColor: 'transparent', borderStyle: 'solid', borderColor: 'transparent', padding: 10}} whileHover={{scale: 1.25}}>
              <Image source={sponsor.image} style={{width: sponsor.width, height: sponsor.height, marginHorizontal: 20}}/>
            </motion.button>
          </View>
      ))}
      <View style={{height: 30}}></View>
      <BottomBar/>
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
  bigHeadText: {
      fontWeight: '500', 
      color: pallete.InnovoYellow, 
      marginBottom: 8,
      fontSize: 40, 
      textDecorationLine: 'underline', 
  },
  image: {
        width: 90, 
        height: 90, 
        borderRadius: 45, 
        borderWidth: 3, 
        borderColor: pallete.InnovoYellow
        
  },
  littleStat: {
      fontSize: 25, 
      fontWeight: '400', 
      color: pallete.InnovoYellow, 
      textAlign: 'center',
      marginBottom: 4
  },
  leaderText: {
    fontSize: 21, 
    fontWeight: '500',
    marginLeft: 20, 
    color: pallete.InnovoYellow,
    paddingRight:20, 
    marginBottom: 2,
    textDecorationLine: 'underline',
    alignSelf: 'flex-end'
  },
  subText: {
      fontSize: 20, 
      fontWeight: '200', 
      color: pallete.InnovoYellow,
      paddingRight:20, 
      marginBottom: 2 
  },

  headerText: {
    fontSize: 25,
    color: pallete.InnovoYellow,
    fontWeight: "500",
    textAlign: 'center'
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

});