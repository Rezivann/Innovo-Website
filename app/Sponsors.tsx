import { useRouter } from 'expo-router';
import React, { useLayoutEffect, useState, useRef, use} from 'react';
import { motion } from 'framer-motion';

import { LinearGradient } from 'expo-linear-gradient';

import { useFonts } from '@expo-google-fonts/barlow/useFonts';

import { Barlow_400Regular,} from '@expo-google-fonts/barlow';

import { LeagueSpartan_400Regular,} from '@expo-google-fonts/league-spartan';

import { Analytics } from "@vercel/analytics/react";


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

import { TopBar, BottomBar, pallete } from './index';


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
    {name: 'Gene Haas Foundation', description: "Their grant has removed financial restrictions we've had when building our robots.", image: Haas, width: 100, height: 100},
    {name: 'Polymaker', description: "They have given us filament to incorporate into our robot's design.", image: Polymaker, width: 250, height: 100},
]


export default function HomeScreen() {
  const router = useRouter();
  const [width, height] = useWindowSize();

  const makeSmall = Boolean(width < 800);

  let [fontsLoaded] = useFonts({
    Barlow_400Regular,
    LeagueSpartan_400Regular
    })
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#272727' }}>
      <title>Sponsors</title>
      <Analytics/>
      <TopBar/>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
       <ImageBackground blurRadius={0} source={circuitBg} resizeMode='cover'  style={{height: height*.5, width: width, justifyContent: 'center'}}>
              <View style= {{flex: 1}}></View>
              <View style= {{padding: 0.5, alignItems: 'center', backgroundColor: '#a2a012a8',justifyContent: 'center', alignSelf: 'center', shadowOffset: { width: 0, height: 0}, shadowColor: '#a2a0127c', shadowRadius: 10, elevation: 10, borderRadius: 40}}>
                <View style={[styles.bigBox, {marginHorizontal: 10, backgroundColor: '#000000',flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', borderRadius: 40}]}>
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
      
      {sponsors.map((sponsor) => (
          <View style={[styles.bigBox, {alignSelf: 'center', flexDirection: 'row', marginTop: 40 ,justifyContent: 'center', flexWrap: 'wrap'}]}>
            <View style={{maxWidth: makeSmall ? width*.85 : width*.5, paddingLeft: 10}}>
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
  bigHeadText: {
      fontFamily: 'Barlow_400Regular',
      fontWeight: '700', 
      color: pallete.InnovoYellow, 
      marginBottom: 8,
      fontSize: 40, 
      textDecorationLine: 'underline', 
  },

  subText: {
      fontFamily: 'LeagueSpartan_400Regular',
      fontSize: 25, 
      fontWeight: '200', 
      color: pallete.InnovoYellow,
      paddingRight:20, 
      marginVertical: 2 
  },

  headerText: {
    fontFamily: 'LeagueSpartan_400Regular',
    fontSize: 30,
    color: pallete.InnovoYellow,
    fontWeight: "500",
    textAlign: 'center'
  },

  bigBox: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: pallete.bigBox,
    borderRadius: 12,
    padding: 16,
  },

});