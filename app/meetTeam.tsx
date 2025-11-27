import { useRouter } from 'expo-router';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
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
const pallete = {
  InnovoYellow: '#eeea09ff',
  dark: '#2c2c2cff',
  black: '#000000',
  bigBox: '#191919',
  accent: '#141414',
  bgColor: '#272727'
}
const windowWidth = Dimensions.get('window').width;
export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: pallete.bgColor }}>
        
      <TopBar/>
      {/* <ImageBackground source={bg} resizeMode="cover" style={{flex: 1, justifyContent: 'center',}}> */}
      <ScrollView>
      <View style={[styles.bigBox, {width: 200, height: 70, marginTop: 20}]}>
        <Text style={[styles.bigHeadText, {fontSize: 30}]}>Build Team: </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', maxWidth: windowWidth, backgroundColor: pallete.bgColor}}>
        <View style={styles.idcard}>
            <View style = {styles.miniBox}>
                <View style={styles.pfp}>
                    <Image source={Sean} style={styles.image}/>
                </View>
                <Text style={styles.pfpName}>Sean Zamidar</Text>
            </View>
            <View style={{flexDirection: 'column-reverse',flex: 1}}> 
                <Text style={[styles.leaderText, {fontSize: 17.5}]}>Head/Captain</Text>
            </View>
        </View>
        <View style={styles.idcard}>
            <View style = {styles.miniBox}>
                <View style={styles.pfp}>
                    <Image source={Darren} style={styles.image}/>
                </View>
                <Text style={styles.pfpName}>Darren Chen</Text>
            </View>
            <View style={{flexDirection: 'column-reverse',flex: 1}}> 
                <Text style={styles.leaderText}>Captain</Text>
            </View>
        </View>
        <View style={styles.idcard}>
            <View style = {styles.miniBox}>
                <View style={styles.pfp}>
                    <Image source={Micah} style={styles.image}/>
                </View>
                <Text style={styles.pfpName}>Micah Newman</Text>
            </View>
        </View>
        <View style={styles.idcard}>
            <View style = {styles.miniBox}>
                <View style={styles.pfp}>
                    <Image source={Winston} style={styles.image}/>
                </View>
                <Text style={styles.pfpName}>Winston Lin</Text>
            </View>
        </View>
        <View style={styles.idcard}>
            <View style = {styles.miniBox}>
                <View style={styles.pfp}>
                    <Image source={Steve} style={styles.image}/>
                </View>
                <Text style={styles.pfpName}>Steve Zamidar</Text>
            </View>
        </View>
      </View>
      <View style={[styles.bigBox, {width: 230, height: 70, marginTop: 20}]}>
        <Text style={[styles.bigHeadText, {fontSize: 30}]}>Coding Team: </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', backgroundColor: pallete.bgColor}}>
        <View style={styles.idcard}>
            <View style = {styles.miniBox}>
                <View style={styles.pfp}>
                    <Image source={David} style={styles.image}/>
                </View>
                <Text style={styles.pfpName}>David Balzac</Text>
            </View>
            <View style={{flexDirection: 'column-reverse',flex: 1}}> 
                <Text style={styles.leaderText}>Head</Text>
            </View>
        </View>
        <View style={styles.idcard}>
            <View style = {styles.miniBox}>
                <View style={styles.pfp}>
                    <Image source={Ivan} style={styles.image}/>
                </View>
                <Text style={styles.pfpName}>Ivan Reznikov</Text>
            </View>
        </View>
        
        <View style={styles.idcard}>
            <View style = {styles.miniBox}>
                <View style={styles.pfp}>
                    <Image source={Shmuel} style={styles.image}/>
                </View>
                <Text style={styles.pfpName}>Shmuel Silver</Text>
            </View>
        </View>
      </View>
      <View style={[styles.bigBox, {width: 250, height: 70, marginTop: 20}]}>
        <Text style={[styles.bigHeadText, {fontSize: 30}]}>Outreach Team: </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', maxWidth: windowWidth, backgroundColor: pallete.bgColor}}>
        <View style={styles.idcard}>
            <View style = {styles.miniBox}>
                <View style={styles.pfp}>
                    <Image source={Maxx} style={styles.image}/>
                </View>
                <Text style={styles.pfpName}>Maxx Star</Text>
            </View>
            <View style={{flexDirection: 'column-reverse',flex: 1}}> 
                <Text style={styles.leaderText}>Head</Text>
            </View>
        </View>
        <View style={styles.idcard}>
            <View style = {styles.miniBox}>
                <View style={styles.pfp}>
                    <Image source={Michael} style={styles.image}/>
                </View>
                <Text style={styles.pfpName}>Michael Persaud</Text>
            </View>
        </View>
        <View style={styles.idcard}>
            <View style = {styles.miniBox}>
                <View style={styles.pfp}>
                    <Image source={Mathew} style={styles.image}/>
                </View>
                <Text style={styles.pfpName}>Mathew Illisaca</Text>
            </View>
            
        </View>

        <View style={styles.idcard}>
            <View style = {styles.miniBox}>
                <View style={styles.pfp}>
                    <Image source={Mohammad} style={styles.image}/>
                </View>
                <Text style={styles.pfpName}>Mohammad Faiz</Text>
            </View>
            
        </View>

        <View style={styles.idcard}>
            <View style = {styles.miniBox}>
                <View style={styles.pfp}>
                    <Image source={Riya} style={styles.image}/>
                </View>
                <Text style={styles.pfpName}>Riya Kumar</Text>
            </View>
            
        </View>
        <View style={styles.idcard}>
            <View style = {styles.miniBox}>
                <View style={styles.pfp}>
                    <Image source={Fabian} style={styles.image}/>
                </View>
                <Text style={styles.pfpName}>Fabian Cadima</Text>
            </View>
        </View>
        <View style={styles.idcard}>
            <View style = {styles.miniBox}>
                <View style={styles.pfp}>
                    <Image source={Alessandra} style={styles.image}/>
                </View>
                <Text style={styles.pfpName}>Alessandra Tetsoti</Text>
            </View>
        </View>

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

  bigStat: {
      fontSize: 100, 
      fontWeight: '700', 
      color: pallete.InnovoYellow, 
      textAlign: 'center',
      marginBottom: 0 
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
    
  }

});