import { useRouter } from 'expo-router';
import React, { useLayoutEffect, useState} from 'react';
import { motion } from 'framer-motion';

import { LinearGradient } from 'expo-linear-gradient';



import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  View
} from 'react-native';
import InnovoPFP from '../assets/images/InnovoLogo.png';

import legacyLogo from '../assets/images/LegacyInnovo.png';
import legacyLogoMobile from '../assets/images/InnovoLegacyMobile.png';

import intoTheDeep from '../assets/images/IntoTheDeep.png';
import centerstage from '../assets/images/Centerstage.png';
import powerplay from '../assets/images/Powerplay.png';


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


const pickImage = (width: number) => {
  if (width < 800) {
    return legacyLogoMobile;
  }
  else {
    return legacyLogo;
  }
}; 



export default function HomeScreen() {
  const router = useRouter();
  const [width, height] = useWindowSize();

  const displayImage = pickImage(width);
  const textSet = (width: number) => {
  if (width < 800) {
    return [width*0.3, 15];
  }
  else {
    return [undefined, 20];
  }
}; 
  const widthFactor = textSet(width)[0];

  const littlefontSize = textSet(width)[1];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#272727' }}>
      <TopBar/>
      <ScrollView>
        <ImageBackground blurRadius={5} source={displayImage} resizeMode='cover'  style={{height: height*.5, width: width, justifyContent: 'center'}}>
              <View style= {{flex: 1}}></View>
              <View style= {{padding: 0.5, alignItems: 'center', backgroundColor: '#a2a0127c',justifyContent: 'center', alignSelf: 'center', shadowOffset: { width: 0, height: 0}, shadowColor: '#a2a0127c', shadowRadius: 10, elevation: 10, borderRadius: 40}}>
                <View style={[styles.bigBox, {marginHorizontal: 10, backgroundColor: '#000000',flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderRadius: 40, elevation: 20, }]}>
                      <Text style={[styles.bigHeadText, {fontSize: 45, paddingHorizontal: 10, textDecorationLine: 'none'}]}>History</Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'column-reverse'}}>
                  <LinearGradient colors={['#27272700', '#272727']} style={{height: 100, width: 'auto'}} />
              </View>
        </ImageBackground>

        <View style={[styles.bigBox, {flexDirection: 'row', marginTop: 40 ,justifyContent: 'center', flexWrap: 'wrap', flex: 1}]}>
                    <View style={{maxWidth: widthFactor, paddingLeft: 10}}>
                      <Text style = {styles.bigHeadText}>2024-2025: Into the Deep</Text>
    
                      <Image source={intoTheDeep} resizeMode='contain' style={{height: 200, width: 200, alignSelf: 'center'}}/>
                    </View>
                    <View style={{ width: 20}}></View>
                    <View style={{flex: 1,}}>
                      <View style={[styles.littleBox, {borderColor: pallete.InnovoYellow, borderWidth: 1}]}>
                        <View style={{flex: 1, padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>	Canadian Rockies Premier Event</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Think Award 3rd Place</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row-reverse', padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>July 25-27, 2025</Text>
                        </View>
                      </View>
                      <View style={[styles.littleBox, {borderColor: pallete.InnovoYellow, borderWidth: 1}]}>
                        <View style={{flex: 1, padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>Long Island Championship</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Think Award 1st Place</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row-reverse', padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>March 16, 2025</Text>
                        </View>
                      </View>
                      <View style={styles.littleBox}>
                        <View style={{flex: 1, padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>Long Island Quallifier #4</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Connect Award</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row-reverse', padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>February 2nd, 2025</Text>
                        </View>
                      </View>
                      <View style={styles.littleBox}>
                        <View style={{flex: 1, padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>Long Island Quallifier #3</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Winning Alliance Captain</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Inspire Award</Text>
                          
                        </View>
                        <View style={{flex: 1, flexDirection: 'row-reverse', padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>February 1st, 2025</Text>
                        </View>
                      </View>
                      <View style={styles.littleBox}>
                        <View style={{flex: 1, padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>Long Island Quallifier #2</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row-reverse', padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>January 19th, 2025</Text>
                        </View>
                      </View>
                    </View>
          </View> 
      </ScrollView>
      <BottomBar/>
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
      fontWeight: '400', 
      color: pallete.InnovoYellow,

      marginBottom: 2,
       
  },
  award: {
      fontSize: 20, 
      fontWeight: '400', 
      color: pallete.InnovoYellow,

      marginLeft: 20, 
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
  littleBox: {
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: pallete.accent,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 2,
    justifyContent: 'space-between',
    flexShrink: 1,
    flexDirection: 'row'
  },

});