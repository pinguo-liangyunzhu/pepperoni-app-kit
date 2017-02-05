
import React, { Component } from 'react';

import { 
  Dimensions
 } from 'react-native';

const bodyWidth = Dimensions.get('window').width;

var ItemStyle = {

  mainView : {
    "backgroundColor" : "#f2f2f2",
    flex : 1
  },
  lineView: {
    "flexDirection": "row",
    "backgroundColor" : "#fff",
    "paddingLeft" : 10,
    "paddingRight" : 10,
    "paddingTop" : 10,
    "paddingBottom" : 10
  },
  rightView : {
    flex: 1
  },
  manager : {
    color : "#666",
    fontSize : 13,
    marginLeft:10,
    marginTop:5
  },
  name : {
    color : "#333",
    fontSize : 15
  },
  info:{
    "paddingLeft" : 5,
    "paddingRight" : 5,
    "paddingTop" : 10,
    "paddingBottom" : 10,
    "flex" : 1,
    "backgroundColor" : "#ccc",
    "borderBottomWidth" : 1,
    "borderBottomColor" : "#eee"
  },
  last: {
    color: "#333",
    textAlign : "center",
    flex : 1
  },
  logo : {
    "width" : 60,
    "height" : 60,
    "marginRight" : 10
  },
  comtext: {
    color:"#428bca",
    marginLeft:10,
    marginTop:5
  },
  btn: {
    width:80,
    height:30,
    textAlign:"center",
    color:"#fff",
    lineHeight:30,
    fontSize:13,
    borderRadius:3,
  },
  btnBox: {
    width:80,
    height:30,
    backgroundColor:"#28a4c9",
    borderRadius:3,
    marginLeft:80
  },
  mainBtn: {
    flexDirection: "row",
    width:300,
    justifyContent:"flex-start",
    paddingTop:10,
    paddingBottom:10
  },
  content: {
    backgroundColor:"#fff"
  },
  control: {
    marginTop:10,
    marginBottom:10,
    justifyContent: "center"
  },
  tabItem: {
    flex:1,
    marginLeft:80,
    marginRight:80
  },
  paddingView:{
    paddingBottom:10
  },
  nodata: {
    paddingTop:20,
    paddingBottom:20,
    fontSize:15,
    textAlign:"center",
    color: "#333"
  },
  listView: {
  },
  oneItem: {
    color: "#666"
  },
  oneLog: {
    color: "#333",
    paddingTop:15
  },
  oneLine: {
    backgroundColor:"#eee",
    paddingTop:10,
    borderBottomWidth:1,
    borderBottomColor:"#ccc",
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:10
  },
  qrUrl : {
      width:240,
      height:260,
      marginTop:bodyWidth * 0.3
  },
  container : {
    backgroundColor:"rgba(0,0,0,0.8)",
    flexDirection: "row",
    flex:1,
    justifyContent: 'center'
  },
  downText: {
    paddingTop:10,
    paddingBottom:10,
    marginRight:10,
    textAlign:"right",
    color:"#28a4c9"
  }
  
}


module.exports = ItemStyle;