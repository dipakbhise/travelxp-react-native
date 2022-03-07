/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import WatchSvg from './awesomeProject/images/watchsvg';
import BookSvg from './awesomeProject/images/booksvg';
import DiamondStrokeSvg from './awesomeProject/images/diamondstroke';
import ProfileSvg from './awesomeProject/images/profilesvg';


const Main = (): Node => {

  const menus = [{
    "name": "App Settings",
    "url": ""
},
{
    "name": "My Bookings",
    "url": ""
},
{
    "name": "Saved Travellers",
    "url": ""
},
{
    "name": "Deals",
    "url": ""
},
{
    "name": "Help",
    "url": ""
},
{
    "name": "Log Out",
    "url": ""
}]
  
  return (
    <View>


    <View style={{ backgroundColor: '#e1e7ee', padding: 20, marginTop: 40, marginHorizontal: 10, borderRadius: 5 }}>
        <View style={{ flexDirection: 'row' }}>

            <View style={{ backgroundColor: '#1d3554', borderColor: '#D9243D', borderWidth: 3, padding: 12, borderRadius: 30, marginRight: 10, }}>
                <Text style={{ color: 'white', fontSize:25, fontWeight:"700" }}>DB</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <Text style={{ marginBottom: 5, fontSize:17, fontWeight:"400" }}>Dipak Bhise</Text>
                    <Text>Personal Account</Text>
                </View>
            </View>

        </View>
    </View>



    <View style={{ backgroundColor: '#e1e7ee', paddingTop: 20, paddingHorizontal:20, marginHorizontal: 10, marginVertical: 10, borderRadius: 5 }}>
        <View style={{ position:'relative' }}>

        <View style={{position:'absolute', backgroundColor:'white', width:200,marginHorizontal:20, opacity:0.5}}>
        <Text>Current Plan</Text>
        <Text>TravelXP</Text>
        </View>

        <View >
       <Text style={{backgroundColor:'#D9243D', color:'white', textAlign:'center', padding:15, marginHorizontal:20, borderRadius:10, shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 }, 
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5, fontWeight:"900", fontSize:20, overflow:"hidden" }}>Become a Red Member</Text>
       <Text style={{textAlign:'center', marginVertical:15}}>And Unlock Exciting Features</Text>
       </View>

        </View>
    </View>

    
    <View style={{marginBottom:100}}>

    {menus.map((menu, index) => (

        <View style={{
            backgroundColor: '#fff', shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 }, 
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
            padding: 20, marginHorizontal: 10, marginBottom: 10, borderRadius: 5
        }} key={index}>
            <View style={{ flexDirection: 'row', justifyContent:"space-between" }}>

                <View>
                    <Text style={{color:'#1d3554', fontWeight:'700', fontSize:14, textTransform:'uppercase'}}>{menu.name}</Text></View>
                    <View><Image source={require('./images/next.png')} style={{width:20, height:20}} resizeMode={'cover'}/></View>
            </View>

           
        </View>

    ))}

    <View style={{flexDirection:"row", justifyContent:"center", alignItems:'center', marginTop:10}}><Text style={{color:'#1d3554'}}>Version: 3.8.0</Text></View>

    
    </View>


</View>
  );
};

const App: () => Node = () => {
  
  return (
    <View style={{backgroundColor:'#F4F8FD'}}>
    <ScrollView>
      <Main/>
    </ScrollView>

   <Bottom/>
    </View>
  );
};

const Bottom = (): Node => {

  return(
    <View style={{flex:1, width:'100%', position:'absolute', bottom:0, borderTopColor:'#e1e1e1', borderTopWidth:1,}}>
    <View style={{backgroundColor:'white', padding:25, flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
   
    <WatchSvg  width={60} height="100%" strokeWidth={0} stroke="black" fill="#1d3554"/>
    <BookSvg width={50} height="100%" strokeWidth={0} stroke="black" fill="#1d3554" op/>
    <DiamondStrokeSvg width={50} height="100%" strokeWidth={1} stroke="black" fill="#1d3554"/>
    <ProfileSvg width={50} height="100%" strokeWidth={0} stroke="black" fill="#1d3554"/>
    

      <StatusBar style="auto" />
    </View>
    </View>
  )


};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
