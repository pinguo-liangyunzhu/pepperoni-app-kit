
import React, { Component } from 'react';

import { 
  Dimensions
 } from 'react-native';

const bodyWidth = Dimensions.get('window').width;

const imgHeight = bodyWidth <= 320 ? 230 : 280;

var IndexStyle ={
  
  mainView : {
    "backgroundColor" : "#fff",
    flex : 1
  },
  topView: {
  	  paddingTop:25,
  	  paddingBottom:25,
  	  backgroundColor:"#fff",
  	  alignItems:"center",
      height:250,
      width:bodyWidth,
      position:"relative"
  },
  adrView: {
      paddingTop:25,
      paddingBottom:25,
      backgroundColor:"#71e597",
      alignItems:"center",
      width:bodyWidth
  },
  content: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    marginTop:10
  },
  parent:{
    flex:1
  },
  indexImg: {
    width:bodyWidth * 0.9,
    height:bodyWidth * 0.6
  },
  iosImg:{
    width:bodyWidth,
    height:imgHeight,
    position:"absolute",
    left:0,
    resizeMode:"stretch",
    top:0
  },
  oneItem: {
    flex:1,
    justifyContent:'center',
    flexDirection:'row'
  },
  nextItem:{
    flex:1,
    alignItems:"center",
    justifyContent:'center'
  },
  plat:{
    width:50,
    height:50
  },
  name: {
    textAlign:"center",
    fontSize:14,
    color:"#333",
    marginTop:5
  },
  tab: {
    height:50,
    borderTopColor:"#eee",
    borderTopWidth:1,
    flexDirection:'row',
    justifyContent:'center'
  },
  onetab : {
    flex:1,
    justifyContent: "center",
    alignItems:"center"
  },
  tabactive :{
    color: "#70e497"
  }
}


module.exports = IndexStyle;