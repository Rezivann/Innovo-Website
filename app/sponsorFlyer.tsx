import { useRouter } from 'expo-router';
import React, { useLayoutEffect, useState, useRef, use} from 'react';
import { motion } from 'framer-motion';

import { LinearGradient } from 'expo-linear-gradient';

import { useFonts } from '@expo-google-fonts/barlow/useFonts';

import { Barlow_400Regular,} from '@expo-google-fonts/barlow';

import { LeagueSpartan_400Regular,} from '@expo-google-fonts/league-spartan';

import { Analytics } from "@vercel/analytics/react";

import {Metadata} from 'next';
export const metadata: Metadata = {
  title: 'Sponsor Flyer | Innovo',
  description: "See the a flyer that offers various sponsorship offers for local businesses."
}


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
import flyer from '../assets/images/Sponsors/Flyer.png'

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



export default function SponsorFlyerScreen() {
  const router = useRouter();
  const [width, height] = useWindowSize();

  const makeSmall = Boolean(width < 800);
  const imageWidth = Math.min(700, width*0.93)
  const imageHeight = imageWidth/0.6669

  let [fontsLoaded] = useFonts({
    Barlow_400Regular,
    LeagueSpartan_400Regular
    })
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#272727' }}>
      <title>Sponsor Flyer</title>
      <Analytics/>
      <TopBar/>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={{position: 'static'}}>
       

{/*       
      <View style={[styles.bigBox, {marginTop:  50, alignItems: 'center', alignSelf: 'center'}]}>
        <Text style={styles.headerText}>Thank you to all of our sponsors.  Your support is very appreciated and will help us get far this year!</Text>
      </View>
      
      {sponsors.map((sponsor) => (
        <View style={{alignSelf: 'center',paddingVertical: 20, paddingHorizontal: 30, display: 'flex',}}>
          <motion.div style={styles.sponsor} layout transition={{layout: {duration: 1, type: "spring"}}}  whileHover={{scale: 1.1, boxShadow: "0 0 20px rgba(190, 196, 13, 0.45)"}}>
          <View style={{flexWrap: 'wrap', flexDirection: 'row', flexShrink: 1, }}>
            <View style={{maxWidth: makeSmall ? width*.85 : width*.5, paddingLeft: 20, paddingRight: 20}}>
              <Text style = {styles.bigHeadText}>{sponsor.name}</Text>
              <Text style = {styles.subText}>{sponsor.description}</Text>
            </View>
            <View style={{flex: 1}}></View>
              <Image source={sponsor.image} style={{width: sponsor.width, height: sponsor.height, marginHorizontal: 20, marginTop: makeSmall ? 30 : 10}}/>
          </View>
          </motion.div>
        </View>
      ))} */}

        <View style={[styles.bigBox, {marginTop:  10, alignItems: 'center', alignSelf: 'center', flexShrink: 1}]}>
            <Image resizeMode="contain" source={flyer} style={{width: imageWidth, height: imageHeight}}/>
        </View>
        <View style={{height: 50}}></View>
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

  sponsor: {
    marginTop: 40 ,
    justifyContent: 'center', 
    alignItems: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: pallete.bigBox,
    borderRadius: 12,
    padding: 16,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.53)",
  },
  subText: {
      fontFamily: 'LeagueSpartan_400Regular',
      fontSize: 25, 
      fontWeight: '200', 
      color: pallete.InnovoYellow,
      paddingRight:20, 
      marginVertical: 2,  
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
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.53)",
  },

});