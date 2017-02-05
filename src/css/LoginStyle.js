
import React, { Component } from 'react';

import { 
  Dimensions
 } from 'react-native';

const bodyWidth = Dimensions.get('window').width;

var LoginStyle = {
   mainView : {
    "flex" : 1,
    "backgroundColor" : "#fff"
   },
   emailImg : {
       width : 35,
       height : 35,
       marginRight: 10
   },
   box : {
       marginTop : 60
   },
   line : {
      marginBottom : 20,
      flexDirection : 'row',
      justifyContent : 'center'
   },
   inputItem : {
      width : 280,
      height:40,
      fontSize : 14
   },
   border:{
      borderBottomWidth : 1,
      borderBottomColor : "#ccc",
      alignItems: "center",
      justifyContent: "center",
   },
   codeInp : {
      width : 200,
      height : 40,
      borderRadius : 5,
      paddingLeft : 5,
      fontSize : 14,
      backgroundColor : "#fff",
      borderWidth:0
   },
   btn: {
     borderRadius : 5,
     marginTop : 50
   },
   loginBtn : {
      width : 280,
      height:40,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor : "#71e597",
      borderRadius :25
   },
   loginText : {
      textAlign : "center",
      "color" : "#fff",
      fontSize:16
   },
   codeImg : {
    width: 80,
    height: 30,
    marginLeft: 5
  },
  imgBox: {
    alignItems: "center",
    marginTop:0.25*bodyWidth
  },
  logo: {
    width:80,
    height:80
  },
  indexText:{
    marginTop:10,
    color:"#59cf82",
    textAlign:"center",
    fontSize:18
  }
}


module.exports = LoginStyle;