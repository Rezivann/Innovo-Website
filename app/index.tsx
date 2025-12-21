import { useRouter } from 'expo-router';
import React, { useLayoutEffect, useState, } from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import { Analytics } from "@vercel/analytics/react";




import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageSourcePropType, 
} from 'react-native';

import { renderItem } from "../assets/FilesforCarousel/render-item";
import { useSharedValue, withDecay } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

import { useFonts } from '@expo-google-fonts/barlow/useFonts';

import { Barlow_400Regular,} from '@expo-google-fonts/barlow';

import { LeagueSpartan_400Regular,} from '@expo-google-fonts/league-spartan';
 
import {motion} from 'framer-motion';

import Insta from '../assets/images/InstaLogo.png';
import TT from '../assets/images/TTLogo.png';
import Youtube from '../assets/images/YTLogo.png';

import InstaHome from '../assets/images/InstaLogoHome.png';
import TTHome from '../assets/images/TTLogoHome.png';
import YoutubeHome from '../assets/images/YTLogoHome.png';

import InnovoWide from '../assets/images/InnovoWide.png';
 
import ExpandBar from '../assets/images/Expand.png';



import image1 from '../assets/images/Slideshow/Image1.jpg';
import image2 from '../assets/images/Slideshow/Image2.png';
import image3 from '../assets/images/Slideshow/Image3.jpg';
import image4 from '../assets/images/Slideshow/Image4.jpg';
import image5 from '../assets/images/Slideshow/Image5.png';

import teamPhoto from '../assets/images/TeamPhoto.png';
import NewMichael from '../assets/images/NewMichaelV2.png';
import Michael from '../assets/images/Michael.jpg';
import { ImageBackground, ImageProps } from 'expo-image';
import { scale } from 'framer-motion';

export const pallete = {
  InnovoYellow: '#eeea09ff',
  black: '#000000',
  bigBox: '#191919',
  accent: '#070707ff',
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

const statSet = (width: number) => {
  if (width < 700) {
    return [47, 12];
  }
  else {
    return [120, 30];
  }
};

// const titleSet = (width: number) => {
//   if (width < 370) {
//       return [10, 14];
//     }
    
//   else if (width < 800){ 
//       return [14, 9];
//   }
//   else {
//     return [23, 30];
//   }
  
// };


export default function HomeScreen() {
  const router = useRouter();
  const [width, height] = useWindowSize();
  const statNums = statSet(width);
  const makeSmall = Boolean(width < 800);
  const aboutUsSmall = Boolean(width < 1164);
  const extraSmall = Boolean(width < 400);

  let [fontsLoaded] = useFonts({
    Barlow_400Regular,
    LeagueSpartan_400Regular
    })
  
  if (!fontsLoaded) {
    return null;
  }
  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: '#272727' }}>
      <title>Home</title>
      <Analytics/>
      <TopBar/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={NewMichael} resizeMode="cover" style={{minHeight: height, flex: 1, justifyContent: 'center'}}>
        <View style={{flex: 1}}></View>
        <View style= {{marginBottom: height*.1,padding: 0.5, alignItems: 'center', backgroundColor: '#a2a0127c',justifyContent: 'center', alignSelf: 'center', shadowOffset: { width: 0, height: 0}, shadowColor: '#a2a0127c', shadowRadius: 10, elevation: 10, borderRadius: 40}}>
          <View style={[styles.bigBox, {marginHorizontal: 10, backgroundColor: '#000000',flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderRadius: 40, elevation: 20, }]}>
                <Image source={InnovoWide} style={{height: makeSmall ? width*.34 : width*.17, width: makeSmall ? width*.7 : width*.4}}resizeMode="contain"/>
          </View>
          
        </View>
        <View style={{flex: 0}}></View>
        <View style={{flex: 1, flexDirection: 'column-reverse',}}>
              <LinearGradient colors={['#27272700', '#272727']} style={{height: 150, width: width}} />
        </View>
      </ImageBackground>

      <StatsBar/>
      {aboutUsSmall ? (
        <View style={[styles.bigBox, {flexGrow: 1, width: width*0.9, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginVertical: 8 }]}>
            <Text style = {styles.bigHeadText}>About us</Text>
            <Text  style = {[styles.subText, {textAlign: 'center', paddingRight: 0}]}>Hello! We are First Tech Challenge Team 5477 Innovo, based in George W. Hewlett High School, New York.  We are committed to upholding our core value, innovation, in everything we do.  From constantly revising our design of our robot, to integrating new control structures in its software, we innovate our robot to overcome the challenges we are faced with.  We also work to shine bright and illuminate our communities with the wonders of STEM in the hopes that they too can innovate themselves.  </Text>
            <View style={{flexGrow: 1, borderColor: pallete.InnovoYellow, borderWidth: 2, borderRadius: 40, marginTop: 20}}>
                <Text style = {[styles.quote, {fontSize: 30, padding:10}]}>"Dream big, build great, together we innovate!"</Text>
            </View>
            <ImageSlideshow/>
        </View>
      ) : (
        <View style={[styles.bigBox, {flexGrow: 1, width: width*0.9, flexDirection: 'row', alignSelf: 'center',marginVertical: 40}]}>
            <View style={{flex: 1, flexShrink: 1, justifyContent: 'center', padding: 20}}>
              <Text style = {[styles.bigHeadText, {alignSelf: 'flex-start', fontFamily: 'Barlow_400Regular'}]}>About us </Text>
              <Text style = {[styles.subText, { fontSize: 24, fontFamily: 'Barlow_400Regular', }]}>Hello! We are First Tech Challenge Team 5477 Innovo, based in George W. Hewlett High School, New York.  We are committed to upholding our core value, innovation, in everything we do.  From constantly revising our design of our robot, to integrating new control structures in its software, we innovate our robot to overcome the challenges we are faced with.  We also work to shine bright and illuminate our communities with the wonders of STEM in the hopes that they too can innovate themselves.  </Text>
              <View style={{borderColor: pallete.InnovoYellow, borderWidth: 2, borderRadius: 40, marginTop: 20}}>
                <Text style = {styles.quote}>"Dream big, build great, together we innovate!"</Text>
              </View>
              
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <ImageSlideshow/>
            </View>
        </View>
      )}

      {/* <View style={[styles.bigBox, {justifyContent: 'center', alignItems: 'center', alignSelf: 'center', paddingHorizontal: 10, paddingVertical: 20, marginVertical: makeSmall ? 5 : 40}]}>
        <ImageSlideshow/>
      </View> */}

      <View style={[styles.bigBox, {flexShrink: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', paddingHorizontal: 30, marginBottom: 40}]}>
        <Text style = {styles.bigHeadText}>Contact us</Text>
        <Text  style = {[styles.subText, {fontSize: 27, textAlign: 'center', marginTop: 10}]}>Feel free to contact us for any reason!  You can reach us with our email or any of our social media below.</Text> 

        <Text style= {[styles.bigHeadText, {fontSize: extraSmall ? 20 : 35, marginTop: 20, fontWeight: '700'}]}>
          innovo912@gmail.com
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'stretch', alignSelf: 'stretch',flex: 1, marginTop: 30, marginBottom: 15}}>
          <View style={{flex: extraSmall ? 1.5 : 2}}></View>

          {/* <motion.view style={{marginTop: 5, height: 50, alignContent: 'center ',justifyContent: 'center', cursor: 'pointer',}} onClick={() => router.push("/meetTeam")} onHoverStart={() => (setMeet(true))} onHoverEnd={() => (setMeet(false))}>
            <Text style={[styles.headerText, {fontSize: titleFonts[0]}]}>Meet the Team</Text>
            {showMeet && (
              <View style={{paddingTop: 0}}>
              <motion.view layout transition={{layout: {duration: 1, type: "spring"}}} style={{originX: 0, height: 2, marginTop: -2, backgroundColor: pallete.InnovoYellow}} initial={{scaleX: 0}} animate={{scaleX: 1}} ></motion.view>
              </View>
            )}
            
          </motion.view> */}
          <motion.view style={styles.socialMedia} onClick={() => router.push("https://www.instagram.com/innovo5477/")} whileHover={{scale: 1.1}}>
            <Image source={InstaHome} style={{width: 55, height: 55}}resizeMode="contain"/>
          </motion.view>
          <View style={{flex: 1}}></View>
          <motion.view  style={styles.socialMedia}  onClick={() => router.push("https://www.tiktok.com/@innovo5477")} whileHover={{scale: 1.1}}>
            <Image source={TTHome} style={{width: 55, height: 55}}resizeMode="contain"/>
          </motion.view>
          <View style={{flex: 1}}></View>
          <motion.view  style={styles.socialMedia} onClick={() => router.push("https://www.youtube.com/@RoboticsInnovo5477")} whileHover={{scale: 1.1}}>
            <Image source={YoutubeHome} style={{width: 55, height: 55}}resizeMode="contain"/>
          </motion.view>  
          <View style={{flex: extraSmall ? 1.5 : 2}}></View>
        </View>
      </View>
      
      
      </ScrollView>
    </SafeAreaView>
  );
}

const images = [image1, image2, image3, image4, image5]

const widthAboveZero = ((width: number) => {
  if (width === 0) {
    return 1;
  }
  else {
    return width;
  }
})


export function ImageSlideshow() {
  const progress = useSharedValue<number>(0);
  const [windowWidth, height] = useWindowSize();
  const width = widthAboveZero(windowWidth);
  const makeSmall = Boolean(width < 800);

  return (
    <View id="carousel-component">
        <Carousel
          autoPlayInterval={2000}
          autoPlay={true}
          data={images}
          height={makeSmall ? width*0.85 : width*0.4}
          loop={true}
          maxScrollDistancePerSwipe={makeSmall ? width*0.85 : width*0.55} 
          minScrollDistancePerSwipe={10} 
          pagingEnabled={false}
          snapEnabled={true}
          width={makeSmall ? width*0.85 : width*0.55}
          style={{width: makeSmall ? width*0.85 : width*0.3}}
          mode='parallax'
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: makeSmall ? 20 : -300,
          }}
          onProgressChange={progress}
          renderItem={renderItem({rounded: true})}/>
      </View>
  )


}





export function BottomBar() {
  const router = useRouter();
  const [width, height] = useWindowSize();
  const extraSmall = Boolean(width < 400);
  return (
    <View style={[styles.topbar, {height:90, justifyContent: 'center'}]}>
      <View style={{alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', gap: extraSmall ? 1 : 7, alignItems: 'center',}}>
        <motion.view style={styles.socialMedia} onClick={() => router.push("https://www.instagram.com/innovo5477/")} whileHover={{scale: 1.1}}>
            <Image source={InstaHome} style={{width: 35, height: 35}}resizeMode="contain"/>
          </motion.view>
          <View style={{flex: 1}}></View>
          <motion.view  style={styles.socialMedia}  onClick={() => router.push("https://www.tiktok.com/@innovo5477")} whileHover={{scale: 1.1}}>
            <Image source={TTHome} style={{width: 35, height: 35}}resizeMode="contain"/>
          </motion.view>
          <View style={{flex: 1}}></View>
          <motion.view  style={styles.socialMedia} onClick={() => router.push("https://www.youtube.com/@RoboticsInnovo5477")} whileHover={{scale: 1.1}}>
            <Image source={YoutubeHome} style={{width: 35, height: 35}}resizeMode="contain"/>
          </motion.view>  
          <View style={{flex: extraSmall ? 1.5 : 2}}></View>
          <Text style={{fontSize: 21, fontWeight: '200', marginLeft: 4, color: pallete.InnovoYellow, fontFamily: 'LeagueSpartan_400Regular'}}>innovo912@gmail.com</Text>
        
      </View>
    </View>
  );
}


function StatsBar() {
  const [width, height] = useWindowSize();
  const statNums = statSet(width);
  const makeSmall = Boolean(width< 800)

  return(
       <View style= {{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 30, paddingHorizontal: makeSmall ? 0 : 0, marginHorizontal: 1}}>

          <View style={[styles.bigBox, {flex: 1 , alignItems: 'stretch', maxWidth: width*0.9}]}>
            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-evenly', paddingBottom: 20}}>
              <View style={{paddingHorizontal: 30, alignItems: 'center', flex: 2}}>
                <Text style = {[styles.bigStat, {fontSize: statNums[0]}]}>14</Text>
                <Text style = {[styles.littleStat, {fontSize: statNums[1]}]}>Seasons played</Text>
              </View>
              
              <View style={{ backgroundColor: pallete.InnovoYellow, width: 1}}></View>

              <View style={{paddingHorizontal: 30, alignItems: 'center', flex: 2}}>
                <Text style = {[styles.bigStat, {fontSize: statNums[0]}]}>18</Text>
                <Text style = {[styles.littleStat, {fontSize: statNums[1]}]}>Awards won since 2022</Text>
              </View>

              <View style={{ backgroundColor: pallete.InnovoYellow, width: 1}}></View>

              <View style={{paddingHorizontal: 30, alignItems: 'center', flex: 2}}>
                <Text style = {[styles.bigStat, {fontSize: statNums[0]}]}>15</Text>
                <Text style = {[styles.littleStat, {fontSize: statNums[1]}]}>Active Members</Text>
              </View>

              <View style={{ backgroundColor: pallete.InnovoYellow, width: 1}}></View>

              <View style={{paddingHorizontal: 30, flex: 2, alignItems: 'center'}}>
                <Text style = {[styles.bigStat, {fontSize: statNums[0]}]}>8</Text>
                <Text style = {[styles.littleStat, {fontSize: statNums[1]}]}>Countries Reached</Text>
              </View>

            </View>
            
          </View>
        </View>

  );

}


export function TopBar() {

  const router = useRouter();

  const [width, height] = useWindowSize();
 
  const [showMeet, setMeet] = useState(false);
  const [showHistory, setHistory] = useState(false);
  const [showSponsor, setSponsor] = useState(false);

  const [expand, setExpand] = useState(false);




  // function updateWidths(id: String, )

  const makeSmall = Boolean(width< 800)
  if (!makeSmall) {
  return (
    <View>
      <View style={[styles.topbar, {justifyContent: 'space-between', elevation: 10}]}>
        <motion.view  style={{cursor: 'pointer', boxShadow: "0 0 10px rgba(0, 0, 0, 0.53)", borderRadius: 10}} onClick={() => router.push("/")} whileHover={{scale: 1.1, boxShadow: "0 0 10px rgba(225, 241, 0, 0.53)"}}>
          <View style={{flexDirection: 'row', alignItems: 'center', borderRadius: 10, padding: 2}}>
                <Image source={InnovoWide} style={{marginTop: 5, width: 125, height: 50}}resizeMode="contain"/>
          </View>
        </motion.view>  
        <View style={{alignItems: 'center', flexDirection: 'row-reverse', gap: 30, marginRight: 10}}>
          <motion.view style={{marginTop: 5, height: 50, alignContent: 'center ',justifyContent: 'center', cursor: 'pointer',}} onClick={() => router.push("/meetTeam")} onHoverStart={() => (setMeet(true))} onHoverEnd={() => (setMeet(false))}>
            <Text style={styles.headerText}>Meet the Team</Text>
            {showMeet && (
              <View style={{paddingTop: 0}}>
              <motion.view layout transition={{layout: {duration: 1, type: "spring"}}} style={{originX: 0, height: 2, marginTop: -2, backgroundColor: pallete.InnovoYellow}} initial={{scaleX: 0}} animate={{scaleX: 1}} ></motion.view>
              </View>
            )}
            
          </motion.view>
          <motion.view style={{marginTop: 5, height: 50, alignContent: 'center ',justifyContent: 'center', cursor: 'pointer',}} onClick={() => router.push("/Sponsors")} onHoverStart={() => (setSponsor(true))} onHoverEnd={() => (setSponsor(false))}>
            <Text style={styles.headerText}>Sponsors</Text>
            {showSponsor && (
              <View style={{paddingTop: 0}}>
              <motion.view layout transition={{layout: {duration: 1, type: "spring"}}} style={{originX: 0, height: 2, marginTop: -2, backgroundColor: pallete.InnovoYellow}} initial={{scaleX: 0}} animate={{scaleX: 1}} ></motion.view>
              </View>
            )}
            
          </motion.view>
          <motion.view style={{marginTop: 5, height: 50, alignContent: 'center ',justifyContent: 'center', cursor: 'pointer',}} onClick={() => router.push("/History")} onHoverStart={() => (setHistory(true))} onHoverEnd={() => (setHistory(false))}>
            <Text style={styles.headerText}>History</Text>
            {showHistory && (
              <View style={{paddingTop: 0}}>
              <motion.view layout transition={{layout: {duration: 1, type: "spring"}}} style={{originX: 0, height: 2, marginTop: -2, backgroundColor: pallete.InnovoYellow}} initial={{scaleX: 0}} animate={{scaleX: 1}} ></motion.view>
              </View>
            )}
          </motion.view>
        </View>
      </View>
    </View>
  );
  }
  else {
    return(
    <View style={{backgroundColor: pallete.black}}>
      <View style={[styles.topbar, {justifyContent: 'space-between', elevation: 10, minHeight: 50}]}>
        <motion.view  style={{cursor: 'pointer', boxShadow: "0 0 10px rgba(0, 0, 0, 0.53)", borderRadius: 10}} onClick={() => router.push("/")} whileHover={{scale: 1.1, boxShadow: "0 0 10px rgba(225, 241, 0, 0.53)"}}>
          <View style={{flexDirection: 'row', alignItems: 'center', borderRadius: 10, padding: 2}}>
                <Image source={InnovoWide} style={{ width: 125, height: 50}}resizeMode="contain"/>
          </View>
        </motion.view>  
        <View style={{alignItems: 'center', flexDirection: 'column'}}>
          <motion.view style={{cursor: 'pointer', alignSelf: 'flex-end'}} onClick={()=> (setExpand(!expand), window.scrollTo({ top: 500, behavior: "smooth" }))}>
            <Image source={ExpandBar} style={{ width: 50, height: 50}}resizeMode="contain"/>
          </motion.view>
        </View>
        
      </View>
      {expand && (
      <motion.view layout transition={{layout: {duration: 2}}}style={{originY: 0, marginRight: 25, width: 200, alignSelf: 'flex-end', flexDirection: 'column', backgroundColor: pallete.black}} initial={{scaleY: 0}} animate={{scaleY: 1}}>
        <View>
              <motion.view style={{paddingTop: 10, height: 50, cursor: 'pointer', alignSelf: 'flex-end',}} onClick={() => router.push("/meetTeam")} onHoverStart={() => (setMeet(true))} onHoverEnd={() => (setMeet(false))}>
                <Text style={styles.headerText}>Meet the Team</Text>
                {showMeet && (
                  <View style={{paddingTop: 0}}>
                  <motion.view layout transition={{layout: {duration: 1, type: "spring"}}} style={{originX: 0, height: 2, marginTop: -2, backgroundColor: pallete.InnovoYellow}} initial={{scaleX: 0}} animate={{scaleX: 1}} ></motion.view>
                  </View>
                )}
        
              </motion.view>
      
              <motion.view style={{paddingTop: 10, height: 50,  cursor: 'pointer', alignSelf: 'flex-end',}} onClick={() => router.push("/Sponsors")} onHoverStart={() => (setSponsor(true))} onHoverEnd={() => (setSponsor(false))}>
                <Text style={styles.headerText}>Sponsors</Text>
                {showSponsor && (
                  <View style={{paddingTop: 0}}>
                  <motion.view layout transition={{layout: {duration: 1, type: "spring"}}} style={{originX: 0, height: 2, marginTop: -2, backgroundColor: pallete.InnovoYellow}} initial={{scaleX: 0}} animate={{scaleX: 1}} ></motion.view>
                  </View>
                )}
       
              </motion.view>

      
              <motion.view style={{paddingTop: 10, height: 50, cursor: 'pointer', alignSelf: 'flex-end',}} onClick={() => router.push("/History")} onHoverStart={() => (setHistory(true))} onHoverEnd={() => (setHistory(false))}>
                <Text style={styles.headerText}>History</Text>
                {showHistory && (
                  <View style={{paddingTop: 0}}>
                  <motion.view layout transition={{layout: {duration: 1, type: "spring"}}} style={{originX: 0, height: 2, marginTop: -2, backgroundColor: pallete.InnovoYellow}} initial={{scaleX: 0}} animate={{scaleX: 1}} ></motion.view>
                  </View>
                )}
              </motion.view>
      </View>
            
      </motion.view>
      )}
      
    </View>
    );
  }
  

}





const styles = StyleSheet.create({
  topbar: {
    flexDirection: 'row',
    backgroundColor: pallete.black,
    padding: 20, 
    
  },
  topBarButton : {
    height: 50, 
    justifyContent: 'center'
  },
  
  bigHeadText: {
      fontSize: 50, 
      fontFamily: 'Barlow_400Regular',
      fontWeight: '500', 
      color: pallete.InnovoYellow, 
      marginBottom: 8 , 
      alignSelf: 'center',
      textDecorationLine: 'underline'
  },

  bigStat: {
    fontFamily: 'Barlow_400Regular',
      fontSize: 50, 
      fontWeight: '700', 
      color: pallete.InnovoYellow, 
      textAlign: 'center',
      marginBottom: 0 
  },
  littleStat: {
    fontFamily: 'Barlow_400Regular',
      fontSize: 25, 
      fontWeight: '400', 
      color: pallete.InnovoYellow, 
      textAlign: 'center',
      marginBottom: 4
  },
  subText: {
      fontFamily: 'LeagueSpartan_400Regular',
      fontSize: 22, 
      fontWeight: '300', 
      color: pallete.InnovoYellow,
      marginBottom: 2,
  },

  headerText: {
    fontFamily: 'LeagueSpartan_400Regular',
    fontSize: 25,
    color: pallete.InnovoYellow,
    fontWeight: "500",
    marginBottom: 10,
    textAlign: 'right'
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
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.53)",
  },
  quote: {
    fontFamily: 'Barlow_400Regular',
    fontSize: 45,
    fontWeight: '300', 
    color: pallete.InnovoYellow, 
    padding: 20,
    flex: 1,
    marginBottom: 8 , 
    alignSelf: 'center',
    textAlign: 'center', 
  },
  socialMedia: {
    backgroundColor: pallete.accent,
    cursor: 'pointer',
    padding: 7,
    borderRadius: 20,
    boxShadow: "0 0 10px rgba(192, 206, 0, 0.26)",

  }
  

});