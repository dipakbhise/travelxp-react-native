import { StatusBar } from 'expo-status-bar';
import React from 'react';
import reactDom from 'react-dom';
// import AppLoading from 'expo-app-loading';
import { Image, ScrollView, StyleSheet, Text, View,Button } from 'react-native';
// import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
// import { Button } from 'react-native-web';

const Main = () => {

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

                    <View style={{ backgroundColor: '#1d3554', borderColor: '#D9243D', borderWidth: 3, padding: 15, borderRadius: 30, marginRight: 10, }}>
                        <Text style={{ color: 'white' }}>DB</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View>
                            <Text style={{ marginBottom: 5 }}>Dipak Bhise</Text>
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
                    elevation: 5, fontWeight:"bold" }}>Become a Red Member</Text>
               <Text style={{textAlign:'center', marginVertical:15, fontWeight:"bold"}}>And Unlock Exciting Features</Text>
               <Text>Hello</Text>
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
                            <Text style={{color:'#1d3554', fontWeight:'700'}}>{menu.name}</Text></View>
                            <View><Image source={require('../../images/next.png')} style={{width:20, height:20}} resizeMode={'cover'}/></View>
                    </View>

                   
                </View>

            ))}

            <View style={{flexDirection:"row", justifyContent:"center", alignItems:'center', marginTop:10}}><Text style={{color:'#1d3554'}}>Version: 3.8.0</Text></View>

            
            </View>

           



        </View>

    )
}

export default Main