import { useRouter } from 'expo-router';
import React, { useLayoutEffect, useState, useRef} from 'react';
import { animate, motion } from 'framer-motion';


import { LinearGradient } from 'expo-linear-gradient';


import { useFonts } from '@expo-google-fonts/barlow/useFonts';


import { Barlow_400Regular,} from '@expo-google-fonts/barlow';


import { LeagueSpartan_400Regular,} from '@expo-google-fonts/league-spartan';


import { Analytics } from "@vercel/analytics/react";






import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from 'react-native';




import meetTeamPhoto from '../assets/images/meetTeamPhoto.jpg';
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




import { TopBar, BottomBar, pallete } from './index';
import { ImageBackground } from 'expo-image';






  type Person = {
    name: string;
    image: ImageSourcePropType;
    specialrole: string;
    cardView: boolean;
    quote: string;
}


const buildTeam: Person[] = [
    {name: 'Sean Zamidar', image: Sean, specialrole: "Head/Captain", cardView: false, quote: "\"INSPIRATIONALQUOTE\""},
    {name: 'Darren Chen', image: Darren, specialrole: "Captain", cardView: false, quote: "INSPIRATIONAL QUOTE"},
    {name: 'Micah Newman', image: Micah, specialrole: "", cardView: false, quote: "INSPIRATIONAL QUOTE"},
    {name: 'Winston Lin', image: Winston, specialrole: "", cardView: false, quote: "INSPIRATIONAL QUOTE"},
    {name: 'Steve Zamidar', image: Steve, specialrole: "", cardView: false, quote: "INSPIRATIONAL QUOTE"},
]


const codingTeam: Person[] = [
    {name: 'David Balzac', image: David, specialrole: "Head", cardView: false, quote: "INSPIRATIONAL QUOTE"},
    {name: 'Ivan Reznikov', image: Ivan, specialrole: "", cardView: false, quote: "INSPIRATIONAL QUOTE"},
    {name: 'Shmuel Silver', image: Shmuel, specialrole: "", cardView: false, quote: "INSPIRATIONAL QUOTE"},
]


const outreachTeam: Person[] = [
    {name: 'Maxx Star', image: Maxx, specialrole: "Head", cardView: false, quote: "INSPIRATIONAL QUOTE"},
    {name: 'Michael Persaud', image: Michael, specialrole: "", cardView: false, quote: "INSPIRATIONAL QUOTE"},
    {name: 'Mathew Illisaca', image: Mathew, specialrole: "", cardView: false, quote: "INSPIRATIONAL QUOTE"},
    {name: 'Mohammad Faiz', image: Mohammad, specialrole: "", cardView: false, quote: "INSPIRATIONAL QUOTE"},
    {name: 'Riya Kumar', image: Riya, specialrole: "", cardView: false, quote: "INSPIRATIONAL QUOTE"},
    {name: 'Fabian Cadima', image: Fabian, specialrole: "", cardView: false, quote: "INSPIRATIONAL QUOTE"},
    {name: 'Alessandra Tetsoti', image: Alessandra, specialrole: "", cardView: false, quote: "INSPIRATIONAL QUOTE"},
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
  const [showCard, setShowCard] = useState(false);
  const router = useRouter();
  const [width, height] = useWindowSize();


  const [build, setBuild] = useState(buildTeam);
  const [code, setCode] = useState(codingTeam);
  const [outreach, setOutreach] = useState(outreachTeam);


  function allClose() {
    handleEditQuote("Nothing", build, setBuild, false);
    handleEditQuote("Nothing", code, setCode, false);
    handleEditQuote("Nothing", outreach, setOutreach, false);
  }
  
 
  function handleEditQuote(name: string, team: Person[], setTeam: React.Dispatch<React.SetStateAction<Person[]>>, updatedCard: boolean) {
        const newList = team.map((member) => {
            if (member.name === name) {
                const updatedMember = {
                    ...member,
                    cardView: updatedCard,
                };
               
                return updatedMember;
            }
            else {
                const updatedMember = {
                    ...member,
                    cardView: false,
                };
               
                return updatedMember;
            }  
        })
        setTeam(newList);
    }


    function editQuote(name: string, team: Person[], setTeam: React.Dispatch<React.SetStateAction<Person[]>>, updatedCard: boolean) {
      allClose();
      handleEditQuote(name, team, setTeam, updatedCard);
    }


  const makeSmall = Boolean(width < 800);


  let [fontsLoaded] = useFonts({
        Barlow_400Regular,
        LeagueSpartan_400Regular
    })


    if (!fontsLoaded) {
        return null;
    }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: pallete.bgColor }}>
      <title>Meet the Team</title>
      <Analytics/>
      <TopBar/>
      {/* <ImageBackground source={bg} resizeMode="cover" style={{flex: 1, justifyContent: 'center',}}> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground blurRadius={4} source={meetTeamPhoto} style={{height: height*.5, justifyContent: 'center'}}>
        <View style= {{flex: 1}}></View>
        <View style= {{padding: 0.5, alignItems: 'center', backgroundColor: '#a2a0127c',justifyContent: 'center', alignSelf: 'center', shadowOffset: { width: 0, height: 0}, shadowColor: '#a2a0127c', shadowRadius: 10, elevation: 10, borderRadius: 40}}>
          <View style={[styles.bigBox, {marginHorizontal: 10, backgroundColor: '#000000',flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', borderRadius: 40}]}>
                <Text style={[styles.bigHeadText, {fontSize: 45}]}>Meet the Team</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'column-reverse'}}>
            <LinearGradient colors={['#27272700', '#272727']} style={{height: 100, width: 'auto'}} />
        </View>
      </ImageBackground>
      <View style={[styles.bigBox, {width: 200, height: 70, marginTop: 20}]}>
        <Text style={[styles.bigHeadText, {fontSize: 30}]}>Build Team: </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', backgroundColor: pallete.bgColor}}>


    {/* <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    }}>
      <motion.div
        style={{
          background: pallete.bigBox,
          padding: '3rem 2rem',
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 10px rgba(148, 236, 14, 0.2)"
        }}
        transition={{
          layout: {
            duration: 1,
            type: 'spring'
          }
        }}
        layout
        onClick={() => setShowCard(!showCard)}
      >
        <motion.text> Hover Click</motion.text>
        {showCard && (
          <motion.text style={{width: '100%'}}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          >
            "If you're gonna make a choice, make one you're not going to regret"
          </motion.text>
        )}


      </motion.div>


    </div> */}
    {build.map((member: Person) => (
          <View style={{paddingVertical: 20, paddingHorizontal: 40, display: 'flex'
          }}>
              <motion.div layout transition={{layout: {duration: 1, type: "spring"}}} style={makeSmall ? styles.idcardSmall : styles.idcard}  whileHover={{scale: 1.1, boxShadow: "0 0 20px rgba(241, 249, 6, 0.72)",}} onClick={(() => (editQuote(member.name, build, setBuild, !member.cardView)))}>
                <View style={{flexDirection: 'row', paddingVertical: 10,}}>
                    <View style = {styles.miniBox}>
                        <View style={styles.pfp}>
                          <Image source={member.image} style={styles.image}/>
                      </View>
                      <Text style={[styles.pfpName, {fontSize: makeSmall ? 20 : 25}]}>{member.name}</Text>
                  </View>
                  <View style={{flexDirection: 'column-reverse',flex: 1}}>
                      <Text style={styles.leaderText}>{member.specialrole}</Text>
                  </View>
                  </View>

                  {/* {member.cardView && (
                    <View style={{flex: 1,  marginTop: 20}}>
                      <motion.text initial={{opacity: 0}} animate={{opacity: 1}} style={styles.subText}>{member.quote}</motion.text>
                    </View>    
                  )} */}
              </motion.div>
            </View>
     ))}
      </View>
      <View style={[styles.bigBox, {width: 230, height: 70, marginTop: 20}]}>
        <Text style={[styles.bigHeadText, {fontSize: 30}]}>Coding Team: </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', backgroundColor: pallete.bgColor}}>
        {code.map((member: Person) => (
          <View style={{paddingVertical: 20, paddingHorizontal: 40, display: 'flex'
          }}>
              <motion.div layout transition={{layout: {duration: 1, type: "spring"}}} style={makeSmall ? styles.idcardSmall : styles.idcard}  whileHover={{scale: 1.1, boxShadow: "0 0 20px rgba(241, 249, 6, 0.72)",}} onClick={(() => (editQuote(member.name, code, setCode, !member.cardView)))}>
                <View style={{flexDirection: 'row', paddingVertical: 10,}}>
                    <View style = {styles.miniBox}>
                        <View style={styles.pfp}>
                          <Image source={member.image} style={styles.image}/>
                      </View>
                      <Text style={[styles.pfpName, {fontSize: makeSmall ? 20 : 25}]}>{member.name}</Text>
                  </View>
                  <View style={{flexDirection: 'column-reverse',flex: 1}}>
                      <Text style={styles.leaderText}>{member.specialrole}</Text>
                  </View>
                  </View>
                  {/* {member.cardView && (
                    <View style={{flex: 1,  marginTop: 20}}>
                      <motion.text initial={{opacity: 0}} animate={{opacity: 1}} style={styles.subText}>{member.quote}</motion.text>
                    </View>    
                  )} */}
              </motion.div>
            </View>
     ))}
      </View>
      <View style={[styles.bigBox, {width: 250, height: 70, marginTop: 20}]}>
        <Text style={[styles.bigHeadText, {fontSize: 30}]}>Outreach Team: </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', backgroundColor: pallete.bgColor}}>
        {outreach.map((member: Person) => (
          <View style={{paddingVertical: 20, paddingHorizontal: 40, display: 'flex'
          }}>
              <motion.div layout transition={{layout: {duration: 1, type: "spring"}}} style={makeSmall ? styles.idcardSmall : styles.idcard}  whileHover={{scale: 1.1, boxShadow: "0 0 20px rgba(241, 249, 6, 0.72)"}} onClick={(() => (editQuote(member.name, outreach, setOutreach, !member.cardView)))}>
                <View style={{flexDirection: 'row', paddingVertical: 10,}}>
                    <View style = {styles.miniBox}>
                        <View style={styles.pfp}>
                          <Image source={member.image} style={styles.image}/>
                      </View>
                      <Text style={[styles.pfpName, {fontSize: makeSmall ? 20 : 25}]}>{member.name}</Text>
                  </View>
                  <View style={{flexDirection: 'column-reverse',flex: 1}}>
                      <Text style={styles.leaderText}>{member.specialrole}</Text>
                  </View>
                  </View>
                  {/* {member.cardView && ( 
                    <View style={{flex: 1,  marginTop: 20}}>
                      <motion.text initial={{opacity: 0}} animate={{opacity: 1}} style={styles.subText}>{member.quote}</motion.text>
                    </View>    
                  )} */}
              </motion.div>
            </View>
     ))}


      </View>
      <View style= {{height: 40}}></View>
      <BottomBar/>
        </ScrollView>
    {/* {</ImageBackground>} */}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  bigHeadText: {
      fontFamily: 'Barlow_400Regular',
      fontSize: 40,
      fontWeight: '700',
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
  leaderText: {
    fontFamily: 'LeagueSpartan_400Regular',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 20,
    color: pallete.InnovoYellow,
    paddingRight:20,
   
    textDecorationLine: 'underline',
    alignSelf: 'flex-end'
  },
  subText: {
      fontFamily: 'Barlow_400Regular',
      fontSize: 22,
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
  bigBox: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: pallete.bigBox,
    borderRadius: 12,
    padding: 16,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.53)",
  },
  idcard: {
    boxShadow: "0 0 10px rgba(232, 239, 27, 0.29)",
    marginHorizontal: 20,
    marginVertical: 10,
    cursor: 'auto',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: pallete.bigBox,
    borderRadius: 12,
    padding: 16,
    width: 400,
    minHeight: 100,
   
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
    paddingLeft: 20,
    marginVertical: 10
   
  },
  pfpName: {
    fontFamily: 'Barlow_400Regular',
    fontSize: 25,
    fontWeight: '500',
    marginLeft: 20,
    color: pallete.InnovoYellow,
    paddingRight:20,
    marginBottom: 2,
   
  },
  idcardSmall: {
   
    boxShadow: "0 0 10px rgba(232, 239, 27, 0.29)",
    marginHorizontal: 20,
    marginVertical: 10,
    cursor: 'auto',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: pallete.bigBox,
    borderRadius: 12,
    padding: 16,
    width: 300,
    minHeight: 70,
   
    elevation: 10
  },
}); //CHANGE CURSORSS TO MAKE IT CLICKABLE

