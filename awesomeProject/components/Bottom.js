import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import WatchSvg from "../images/watchsvg.js";
import BookSvg from "../images/booksvg.js";
import ProfileSvg from "../images/profilesvg.js";
import DiamondStrokeSvg from "../images/diamondstroke.js";
// const WatchSvg = require("../images/watchsvg.js");


const Bottom = () => {
  return (
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
}

export default Bottom