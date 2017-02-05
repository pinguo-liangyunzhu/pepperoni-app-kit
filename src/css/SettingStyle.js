
import React, { Component } from 'react';

import { 
  Dimensions
 } from 'react-native';

const bodyWidth = Dimensions.get('window').width;

const SettingStyle = {

  mainView : {
    "backgroundColor" : "#f2f2f2",
    flex : 1
  },
  title: {
  	fontSize: 18,
  	color:"#333",
  	fontWeight: "bold",
  	marginTop:30,
  	marginBottom:10
  },
  content: {
  	flexDirection:'column',
  	marginLeft:30,
  	marginRight:30
  },
  listView: {
  	flex:1,
  	flexDirection: "column",
  	borderWidth:1,
  	borderRadius:1,
  	borderColor:"#eee"
  },
  infoBox: {
     flex:1,
  	 flexDirection: "column",
     position:"relative"
  },
  oneList: {
  	flex:1,
  	backgroundColor:"#fff",
    marginBottom:10,
  	padding:10,
  	position:"relative",
  	flexDirection:"row",
    position:"relative"
  },
  imageItem: {
  	width:40,
  	height:40,
  	borderRadius:5,
  	marginRight:5
  },
  info: {
  	color: "#666",
  	paddingTop:10,
  	paddingBottom:10
  },
  userName: {
  	marginLeft:15,
  	color:"#fff",
    width:60,
    textAlign:"center",
    backgroundColor:"#3ad88f",
    borderRadius:3,
    padding:5
  },
  total:{
  	padding:10,
    backgroundColor:"#fff",
  	marginBottom:30
  },
  noget: {
    height:28,
    width:60,
    borderRadius:5,
    borderWidth:1,
    borderColor:"#3ad88f",
    position:"absolute",
    zIndex:1,
    right:10,
    top:20,
    alignItems:"center",
    justifyContent:"center"
  },
  nogetText:{
    color:"#3ad88f",
  },
  getText:{
    color:"#fff"
  },
  get: {
    height:28,
    width:60,
    borderRadius:5,
    backgroundColor:"#3ad88f",
    position:"absolute",
    zIndex:1,
    right:10,
    top:20,
    alignItems:"center",
    justifyContent:"center"
  },
  btnBox: {
    width:80,
    height:30,
    backgroundColor:"#c9302c",
    marginLeft:80,
    position:"absolute",
    right:10,
    bottom:37,
    borderRadius:3,
    alignItems:"center",
    justifyContent:"center"
  },
  btn: {
    width:70,
    textAlign:"center",
    color:"#fff",
    fontSize:13
  },
  name: {
    marginTop:10
  }
  
}


module.exports = SettingStyle;