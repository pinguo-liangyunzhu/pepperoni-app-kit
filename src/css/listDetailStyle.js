
import React, { Component } from 'react';

import {
  Dimensions
 } from 'react-native';

const bodyWidth = Dimensions.get('window').width;

var listDetailStyle = {

  mainView : {
    "backgroundColor" : "#f2f2f2",
    flex : 1,
    paddingBottom:30
  },
    lineView: {
    "flexDirection": "row",
    "backgroundColor" : "#fff",
    "paddingLeft" : 10,
    "paddingRight" : 10,
    "paddingTop" : 10,
    "paddingBottom" : 10,
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
    marginLeft:10,
    color:"#666"
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
    "width" : 80,
    "height" : 80,
    "marginRight" : 10
  },
  comtext: {
    color:"#428bca",
    marginLeft:10,
    marginTop:5
  },
  btn: {
    width:70,
    textAlign:"center",
    color:"#3ad88f",
    fontSize:13
  },
  btnactive: {
    width:70,
    textAlign:"center",
    color:"#fff",
    fontSize:13
  },
  btnBox: {
    width:80,
    height:30,
    borderRadius:3,
    borderWidth:1,
    borderColor:"#3ad88f",
    borderRadius:3,
    flex:1,
    marginLeft:10,
    alignItems:"center",
    justifyContent:"center"
  },
  setBox: {
    width:80,
    height:30,
    backgroundColor:"#3ad88f",
    borderRadius:3,
    flex:1,
    marginLeft:10,
    alignItems:"center",
    justifyContent:"center"
  },
  mainBtn: {
    flexDirection: "row",
    width:300,
    justifyContent:"flex-start",
    paddingTop:10,
    paddingBottom:10
  },
  content: {
    backgroundColor:"#f2f2f2"
  },
  whiteBg:{
    backgroundColor:"#fff"
  },
  control: {
    flexDirection:"row",
    width:180,
    marginTop:10,
    alignItems: "flex-start"
  },
  tabItem: {
    width:200,
    height:35,
    marginLeft:80,
    marginRight:80,
    borderWidth:0
  },
  nodata: {
    paddingTop:20,
    paddingBottom:20,
    fontSize:15,
    textAlign:"center",
    color: "#333",
    backgroundColor:"#f2f2f2"
  },
  listView: {
    backgroundColor:"#f2f2f2",
    marginBottom:20
  },
  oneItem: {
    color: "#666",
    paddingBottom:10
  },
  oneLog: {
    color: "#333"
  },
  oneLine: {
    backgroundColor:"#eee",
    paddingTop:15,
    borderBottomWidth:1,
    borderBottomColor:"#ccc",
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:15,
    position:"relative"
  },
  qrUrl : {
      width:240,
      height:260,
      marginTop:bodyWidth * 0.3
  },
  container : {
    backgroundColor:"rgba(0,0,0,0.8)",
    flexDirection: "column",
    flex:2,
    justifyContent: 'center',
    alignItems:'center'
  },
  saveQrImage:{
    backgroundColor:"#3ad88f",
    justifyContent: 'center',
    borderRadius:3,
    width:120,
    height:50,
    marginTop:50
  },
  saveQrImageText:{
    textAlign:'center',
    color:"#ffffff"
  },
  downText: {
    width:55,
    textAlign:"center",
    color:"#3ad88f",
    borderRadius:3,
    borderWidth:1,
    borderColor:"#3ad88f",
    marginRight:5,
    fontSize:13,
    paddingTop:5,
    paddingBottom:5
  },
  line:{
     alignItems:"flex-end",
     flex:1,
     justifyContent:"center"
  },
  paddingView: {
    paddingBottom:10,
    backgroundColor:"#fff"
  },
  scroll: {
     paddingBottom:30,
     backgroundColor:"#f2f2f2"
  },
  marginLeft100:{
    marginLeft:100
  },
  noresult: {
    marginTop:10,
    paddingBottom:10
  },
  active: {
    height:40,
    alignItems:"center",
    justifyContent: "center",
    backgroundColor:"#eee",
    borderTopLeftRadius:3,
    borderTopRightRadius:3,
    flex:1
  },
  all: {
    height:40,
    alignItems:"center",
    justifyContent: "center",
    backgroundColor:"#fff",
    borderTopLeftRadius:3,
    borderTopRightRadius:3,
    flex:1
  }

}


module.exports = listDetailStyle;
