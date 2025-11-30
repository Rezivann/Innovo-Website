import { useRouter } from 'expo-router';
import React, { useLayoutEffect, useState, useRef} from 'react';

import {
  Animated,
  Image,
  SafeAreaView,
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
import { Shadow } from 'react-native-shadow-2';
import InnovoPFP from '../assets/images/InnovoLogo.png';
import pfp from '../assets/images/DefaultAvatar.png';

import Alessandra from '../assets/images/PFPs/Alessandra.png';
import Darren from '../assets/images/PFPs/Darren.png';
import David from '../assets/images/PFPs/David.png';
import Fabian from '../assets/images/PFPs/Fabian.png';
import Ivan from '../assets/images/PFPs/Ivan.png';
import Mathew from '../assets/images/PFPs/Mathew.png';
import Maxx from '../assets/images/PFPs/Maxx.png';
import Micah from '../assets/images/PFPs/Micah.png';
import Michael from '../assets/images/PFPs/Michael.png';
import Mohammad from '../assets/images/PFPs/Mohammad.png';
import Riya from '../assets/images/PFPs/Riya.png';
import Sean from '../assets/images/PFPs/Sean.png';
import Shmuel from '../assets/images/PFPs/Shmuel.png';
import Steve from '../assets/images/PFPs/Steve.png';
import Winston from '../assets/images/PFPs/Winston.png';

import bg from '../assets/images/websiteBg.png';

import topBar, { TopBar } from './index';
import bottomBar, { BottomBar } from './index';
import { ZoomIn } from 'react-native-reanimated';
import { ImageBackground } from 'expo-image';
import AnimatedComponent from 'react-native-reanimated/lib/typescript/createAnimatedComponent/AnimatedComponent';
const pallete = {
  InnovoYellow: '#eeea09ff',
  dark: '#2c2c2cff',
  black: '#000000',
  bigBox: '#191919',
  accent: '#141414',
  bgColor: '#272727'
}

type Person = {
    name: string;
    image: ImageSourcePropType;
    specialrole: string;
    magnify: boolean;
}

const buildTeam: Person[] = [
    {name: 'Sean Zamidar', image: Sean, specialrole: "Head/Captain", magnify: false},
    {name: 'Darren Chen', image: Darren, specialrole: "Captain", magnify: false},
    {name: 'Micah Newman', image: Micah, specialrole: "", magnify: false},
    {name: 'Winston Lin', image: Winston, specialrole: "", magnify: false},
    {name: 'Steve Zamidar', image: Steve, specialrole: "", magnify: false},
]

const codingTeam: Person[] = [
    {name: 'David Balzac', image: David, specialrole: "Head", magnify: false},
    {name: 'Ivan Reznikov', image: Ivan, specialrole: "", magnify: false},
    {name: 'Shmuel Silver', image: Shmuel, specialrole: "", magnify: false},
]

const outreachTeam: Person[] = [
    {name: 'Maxx Star', image: Maxx, specialrole: "Head", magnify: false},
    {name: 'Michael Persaud', image: Michael, specialrole: "", magnify: false},
    {name: 'Mathew Illisaca', image: Mathew, specialrole: "", magnify: false},
    {name: 'Mohammad Faiz', image: Mohammad, specialrole: "", magnify: false},
    {name: 'Riya Kumar', image: Steve, specialrole: "", magnify: false},
    {name: 'Fabian Cadima', image: Fabian, specialrole: "", magnify: false},
    {name: 'Alessandra Tetsoti', image: Alessandra, specialrole: "", magnify: false},
]


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
  

  const animation = useRef<Animated.CompositeAnimation>(null);
  const scale = useRef(new Animated.Value(1)).current
  const makeBigger = () => {
    animation.current = Animated.timing(scale, {
        toValue: 2,
        duration: 500,
        useNativeDriver: true,
    })
    animation.current.start();
  };
  const makeSmaller = () => {
    animation.current = Animated.timing(scale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
    })
    animation.current.start();
  };



  const [build, setBuild] = useState(buildTeam);
  function handleEditZoom(name: string, mag: boolean) {
        const newList = buildTeam.map((member) => {
            if (member.name === name) {
                const updatedMember = {
                    ...member,
                    magnify: mag,
                };
                return updatedMember;
            }
            else {
                return member;
            }   
        })
        setBuild(newList);
    }

    




  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: pallete.bgColor }}>
        
      <TopBar/>
      {/* <ImageBackground source={bg} resizeMode="cover" style={{flex: 1, justifyContent: 'center',}}> */}
      <ScrollView>
      <View style={[styles.bigBox, {width: 200, height: 70, marginTop: 20}]}>
        <Text style={[styles.bigHeadText, {fontSize: 30}]}>Build Team: </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', backgroundColor: pallete.bgColor}}>


    {makeSmall ? (
        build.map((member: Person) => (
            <View  style={styles.idcardSmall}>
                
                <View style = {[styles.miniBox]}>
                    <View style={styles.pfp}>
                        <Image source={member.image} style={styles.image}/>
                    </View>
                    <Text style={styles.pfpName}>{member.name}</Text>
                </View>
                <View style={{flexDirection: 'column-reverse',flex: 1}}> 
                    <Text style={[styles.leaderText, {fontSize: 17.5}]}>{member.specialrole}</Text>
                </View>
            </View>   

    ))) : (

        build.map((member: Person) => (
        <div className="container" onMouseOver={() => (handleEditZoom(member.name, true))}style={{}} onMouseLeave={() => (handleEditZoom(member.name, false))}>
        {!member.magnify ? (
            <View style={styles.idcard}>
                <View style = {styles.miniBox}>
                    <View style={styles.pfp}>
                        <Image source={member.image} style={styles.image}/>
                    </View>
                    <Text style={styles.pfpName}>{member.name} </Text>
                </View>
                <View style={{flexDirection: 'column-reverse',flex: 1}}> 
                    <Text style={[styles.leaderText, {fontSize: 17.5}]}>{member.specialrole}</Text>
                </View>
            </View>
        ) : (
            <Animated.View style={[
                styles.idcard,
                {transform: [{scale}]}
            ]}>
                <View style = {styles.miniBox}>
                    <View style={styles.pfp}>
                        <Image source={member.image} style={styles.image}/>
                    </View>
                    <Text style={styles.pfpName}>{member.name} </Text>
                </View>
                <View style={{flexDirection: 'column-reverse',flex: 1}}> 
                    <Text style={[styles.leaderText, {fontSize: 17.5}]}>{member.specialrole}</Text>
                </View>
            </Animated.View>
            
        )}
        </div> //transform: [{scale: 1.1}]
    )))}
      </View>
      <View style={[styles.bigBox, {width: 230, height: 70, marginTop: 20}]}>
        <Text style={[styles.bigHeadText, {fontSize: 30}]}>Coding Team: </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', backgroundColor: pallete.bgColor}}>
        {makeSmall ? (
        codingTeam.map((member: Person) => (
        <View style={styles.idcardSmall}>
            <View style = {styles.miniBox}>
                <View style={styles.pfp}>
                    <Image source={member.image} style={styles.image}/>
                </View>
                <Text style={styles.pfpName}>{member.name}</Text>
            </View>
            <View style={{flexDirection: 'column-reverse',flex: 1}}> 
                <Text style={[styles.leaderText, {fontSize: 17.5}]}>{member.specialrole}</Text>
            </View>
        </View>
    ))) : (
        codingTeam.map((member: Person) => (
        
        <View style={styles.idcardSmall}>
            <View style = {styles.miniBox}>
                <View style={styles.pfp}>
                    <Image source={member.image} style={styles.image}/>
                </View>
                <Text style={styles.pfpName}>{member.name}</Text>
            </View>
            <View style={{flexDirection: 'column-reverse',flex: 1}}> 
                <Text style={[styles.leaderText, {fontSize: 17.5}]}>{member.specialrole}</Text>
            </View>
        </View>
    )))}
      </View>
      <View style={[styles.bigBox, {width: 250, height: 70, marginTop: 20}]}>
        <Text style={[styles.bigHeadText, {fontSize: 30}]}>Outreach Team: </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', maxWidth: width, backgroundColor: pallete.bgColor}}>
        {makeSmall ? (
        outreachTeam.map((member: Person) => (
        <View style={styles.idcardSmall}>
            <View style = {styles.miniBox}>
                <View style={styles.pfp}>
                    <Image source={member.image} style={styles.image}/>
                </View>
                <Text style={styles.pfpName}>{member.name}</Text>
            </View>
            <View style={{flexDirection: 'column-reverse',flex: 1}}> 
                <Text style={[styles.leaderText, {fontSize: 17.5}]}>{member.specialrole}</Text>
            </View>
        </View>
    ))) : (
        outreachTeam.map((member: Person) => (
        
        <View style={styles.idcard}>
            <View style = {styles.miniBox}>
                <View style={styles.pfp}>
                    <Image source={member.image} style={styles.image}/>
                </View>
                <Text style={styles.pfpName}>{member.name}</Text>
            </View>
            <View style={{flexDirection: 'column-reverse',flex: 1}}> 
                <Text style={[styles.leaderText, {fontSize: 17.5}]}>{member.specialrole}</Text>
            </View>
        </View>
    )))}

      </View>
      <View style= {{height: 40}}></View>
      <BottomBar/>
        </ScrollView>
    {/* {</ImageBackground>} */}
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
      fontSize: 40, 
      fontWeight: '500', 
      color: pallete.InnovoYellow, 
      marginBottom: 8 
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
  },
  idcard: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: pallete.bigBox,
    borderRadius: 12,
    padding: 16,
    width: 400, 
    height: 125, 
    flexDirection: 'row',
    shadowOffset: {
        width: -4,
        height: 5
    },
    shadowColor: '#a2a0128d',
    shadowRadius: 4,
    elevation: 10
    
  },
  pfp: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: pallete.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  miniBox: {
    alignItems: 'center', 
    flexDirection: 'row', 
    paddingLeft: 20
  },
  pfpName: {
    fontSize: 25, 
    fontWeight: '400',
    marginLeft: 20, 
    color: pallete.InnovoYellow,
    paddingRight:20, 
    marginBottom: 2,
    
  },
  idcardSmall: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: pallete.bigBox,
    borderRadius: 12,
    padding: 16,
    width: 350, 
    height: 125, 
    flexDirection: 'row',
    shadowOffset: {
        width: -4,
        height: 5
    },
    shadowColor: '#a2a0128d',
    shadowRadius: 4,
    elevation: 10
    
  },

});