
import { Unmatched } from 'expo-router';
import { useRouter } from 'expo-router';
import {pallete } from './index';

import frownImage from '../assets/images/SiteNotFound.png';

import { Analytics } from "@vercel/analytics/next";


import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';

import React, { use, useLayoutEffect, useState, } from 'react';
import { useFonts } from '@expo-google-fonts/barlow/useFonts';

import { Barlow_400Regular,} from '@expo-google-fonts/barlow';

import { LeagueSpartan_400Regular,} from '@expo-google-fonts/league-spartan';


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

function returnToHome() {
    const router = useRouter();


    const [width, height] = useWindowSize();
    let [fontsLoaded] = useFonts({
        Barlow_400Regular,
        LeagueSpartan_400Regular
        })
      
      if (!fontsLoaded) {
        return null;
      }
    return (
        <View style={{flex:1}}>
          <Analytics/>
            <View style={{flex: 2}}></View>
            
            <View style={styles.bigBox}>
                <Image source={frownImage} style={{width: width*.3, height: width*.3, marginBottom: 10}}/> 
                <Text style={styles.bigHeadText}>
                    Page not found!
                </Text>
                <Text style={styles.subText}>Sorry, we couldn't find the page you were looking for. Please go back to home!</Text>
                <TouchableOpacity onPress={()=> (router.push("/"))}>
                    <View style={styles.littleBox}>
                        <Text style={styles.buttonText}>Home</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={{flex: 2}}></View>
        </View>
        )
        
        ;
}

export default returnToHome;

const styles = StyleSheet.create({
  littleBox: {
    marginVertical: 10,
    backgroundColor: pallete.accent,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'center',
   
  },
  bigHeadText: {
      fontSize: 50, 
      fontFamily: 'Barlow_400Regular',
      fontWeight: '500', 
      color: pallete.InnovoYellow, 
      marginBottom: 8 , 
      alignSelf: 'center',
      textDecorationLine: 'underline',
      textAlign: 'center'
  },
  subText: {
      fontFamily: 'LeagueSpartan_400Regular',
      fontSize: 22, 
      fontWeight: '300', 
      color: pallete.InnovoYellow,
      marginVertical: 10,
      textAlign:'center'
  },
  buttonText: {
      fontFamily: 'LeagueSpartan_400Regular',
      fontSize: 40, 
      fontWeight: '400', 
      color: pallete.InnovoYellow,
      textAlign:'center'
  },
  
  bigBox: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: pallete.bigBox,
    borderRadius: 12,
    padding: 16,
    flexShrink: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center'


  },
  

});