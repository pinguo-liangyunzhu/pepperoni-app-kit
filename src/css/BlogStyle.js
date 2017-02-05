
import React, { Component } from 'react';

import { 
  Dimensions
 } from 'react-native';

const bodyWidth = Dimensions.get('window').width;

var IndexStyle ={
  
  mainView : {
    "backgroundColor" : "#fff",
    flex : 1
  },
  content: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center'
  },
  webView: {
    flex:1
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