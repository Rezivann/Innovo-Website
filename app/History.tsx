import { useRouter } from 'expo-router';
import React, { useLayoutEffect, useState} from 'react';
import { motion } from 'framer-motion';

import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from '@expo-google-fonts/barlow/useFonts';

import { Barlow_400Regular,} from '@expo-google-fonts/barlow';

import { LeagueSpartan_400Regular,} from '@expo-google-fonts/league-spartan';


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

import legacyLogo from '../assets/images/LegacyInnovo.png';
import legacyLogoMobile from '../assets/images/InnovoLegacyMobile.png';



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




export default function HomeScreen() {
  const router = useRouter();
  const [width, height] = useWindowSize();

  const makeSmall = Boolean(width < 800);
  const displayImage = (makeSmall ? legacyLogoMobile : legacyLogo);


  const littlefontSize = (makeSmall ? 18 : 27.5);

  let [fontsLoaded] = useFonts({
      Barlow_400Regular,
      LeagueSpartan_400Regular
      })
    
    if (!fontsLoaded) {
      return null;
    }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#272727' }}>
      <title>History</title>
      <TopBar/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground blurRadius={5} source={displayImage} resizeMode='cover'  style={{height: height*.5, width: width, justifyContent: 'center'}}>
              <View style= {{flex: 1}}></View>
              <View style= {{padding: 0.5, alignItems: 'center', backgroundColor: '#a2a0127c',justifyContent: 'center', alignSelf: 'center', shadowOffset: { width: 0, height: 0}, shadowColor: '#a2a0127c', shadowRadius: 10, elevation: 10, borderRadius: 40}}>
                <View style={[styles.bigBox, {marginHorizontal: 10, backgroundColor: '#000000',flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', borderRadius: 40}]}>
                      <Text style={[styles.bigHeadText, {fontSize: 55, fontWeight: '700' ,paddingHorizontal: 10,textDecorationLine: 'none'}]}>History</Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'column-reverse'}}>
                  <LinearGradient colors={['#27272700', '#272727']} style={{height: 100, width: 'auto'}} />
              </View>
        </ImageBackground>
        <View style={[styles.bigBox, {marginTop: 40, flexShrink: 1, backgroundColor: '#181818ff'}]}>                  
                    <Text style = {[styles.bigHeadText, {marginLeft: 10}]}>2025-2026: Decode</Text>
                    <View style={{flex: 1,}}>
                      <View style={styles.littleBox}>
                        <View style={{flex: 2, padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>Long Island Quallifier #1</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Winning Alliance Captain</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Inspire Award</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row-reverse', padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize, textAlign: 'right'}]}>December 7th, 2025</Text>
                        </View>
                      </View>
                    </View>
          </View>


        <View style={[styles.bigBox, {marginTop: 40, flexShrink: 1, backgroundColor: '#181818ff'}]}>                  
                    <Text style = {[styles.bigHeadText, {marginLeft: 10}]}>2024-2025: Into the Deep</Text>
                    
                    <View style={{flex: 1,}}>
                      <View style={styles.specialLittleBox}>
                        <View style={{flex: 2, padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>Canadian Rockies Premier Event</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Think Award 3rd Place</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row-reverse', padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize, textAlign: 'right'}]}>July 25-27, 2025</Text>
                        </View>
                      </View>
                      <View style={styles.specialLittleBox}>
                        <View style={{flex: 2, padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>Long Island Championship</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Think Award 1st Place</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row-reverse', padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize, textAlign: 'right'}]}>March 16, 2025</Text>
                        </View>
                      </View>
                      <View style={styles.littleBox}>
                        <View style={{flex: 2, padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>Long Island Quallifier #4</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Connect Award</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row-reverse', padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize, textAlign: 'right'}]}>February 2nd, 2025</Text>
                        </View>
                      </View>
                      <View style={styles.littleBox}>
                        <View style={{flex: 2, padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>Long Island Quallifier #3</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Winning Alliance Captain</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Inspire Award</Text>
                          
                        </View>
                        <View style={{flex: 1, flexDirection: 'row-reverse', padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize, textAlign: 'right'}]}>February 1st, 2025</Text>
                        </View>
                      </View>
                      <View style={styles.littleBox}>
                        <View style={{flex: 2, padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>Long Island Quallifier #2</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row-reverse', padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize, textAlign: 'right'}]}>January 19th, 2025</Text>
                        </View>
                      </View>
                    </View>
          </View>
          <View style={[styles.bigBox, {marginTop: 40, flexShrink: 1}]}> 
                    
                      <Text style = {[styles.bigHeadText, {marginLeft: 10}]}>2023-2024: Centerstage</Text>
                    
                    <View style={{flex: 1,}}>
                      <View style={styles.specialLittleBox}>
                        <View style={{flex: 2, padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>Long Island Championship</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row-reverse', padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize, textAlign: 'right'}]}>March 3rd, 2024</Text>
                        </View>
                      </View>
                      <View style={styles.littleBox}>
                        <View style={{flex: 2, padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>Long Island Quallifier #5</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Winning Alliance: 1st Team Selected</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Motivate Award 3rd Place</Text>
                          
                        </View>
                        <View style={{flex: 1, flexDirection: 'row-reverse', padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize, textAlign: 'right'}]}>February 4th, 2024</Text>
                        </View>
                      </View>
                      <View style={styles.littleBox}>
                        <View style={{flex: 2, padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>Long Island Quallifier #4</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Inspire Award 2nd Place</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Think Award</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Connect Award 2nd Place</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Control Award 3rd Place</Text>
                          
                        </View>
                        <View style={{flex: 1, flexDirection: 'row-reverse', padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize, textAlign: 'right'}]}>February 3rd, 2024</Text>
                        </View>
                      </View>
                      <View style={styles.littleBox}>
                        <View style={{flex: 2, padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>Long Island Quallifier #3</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row-reverse', padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize, textAlign: 'right'}]}>January 14th, 2024</Text>
                        </View>
                      </View>
                    </View>
          </View> 
          <View style={[styles.bigBox, {marginTop: 40, flexShrink: 1}]}> 
                    
                    <Text style = {[styles.bigHeadText, {marginLeft: 10}]}>2022-2023: Power Play</Text>
                    <View style={{flex: 1,}}>
                      <View style={styles.specialLittleBox}>
                        <View style={{flex: 2, padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>Long Island Championship</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row-reverse', padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize, textAlign: 'right'}]}>March 12th, 2023</Text>
                        </View>
                      </View>
                      <View style={styles.littleBox}>
                        <View style={{flex: 2, padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>Long Island Quallifier #3</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Winning Alliance: 1st Team Selected</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Connect Award</Text>
                          
                        </View>
                        <View style={{flex: 1, flexDirection: 'row-reverse', padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize, textAlign: 'right'}]}>January 29th, 2023</Text>
                        </View>
                      </View>
                      <View style={styles.littleBox}>
                        <View style={{flex: 2, padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize}]}>Long Island Quallifier #2</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Finalist Alliance: Captain</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Control Award</Text>
                          <Text style={[styles.award, {fontSize: littlefontSize}]}>-Design Award 3rd Place</Text>
                          
                        </View>
                        <View style={{flex: 1, flexDirection: 'row-reverse', padding: 10}}>
                          <Text style={[styles.subText, {fontSize: littlefontSize, textAlign: 'right'}]}>January 15th, 2023</Text>
                        </View>
                      </View>
                    </View>
          </View>  
          <BottomBar/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bigHeadText: {
      fontFamily: 'Barlow_400Regular',
      fontWeight: '500', 
      color: pallete.InnovoYellow, 
      marginBottom: 8,
      fontSize: 45, 
      textDecorationLine: 'underline', 
  },
  subText: {
      fontSize: 20,
      fontFamily: 'LeagueSpartan_400Regular',
      fontWeight: '400', 
      color: pallete.InnovoYellow,

      marginVertical: 4,
       
  },
  award: {
      fontSize: 20, 
      fontFamily: 'LeagueSpartan_400Regular',
      fontWeight: '400', 
      color: pallete.InnovoYellow,
      marginLeft: 20, 
      marginVertical: 2 
  },
  specialLittleBox: {
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: pallete.accent,
    borderColor: pallete.InnovoYellow,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 2,
    justifyContent: 'space-between',
    flexGrow: 1,
    flexDirection: 'row'
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
    flexGrow: 1,
    flexDirection: 'row'
  },

});