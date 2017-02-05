
import React, { Component } from 'react';

import { 
  Dimensions
 } from 'react-native';

const bodyWidth = Dimensions.get('window').width;

var listStyle ={
  mainView : {
    "backgroundColor" : "#f2f2f2",
    flex : 1
  },
  logo : {
    "width" : 60,
    "height" : 60,
    "marginRight" : 10
  },
  lineView: {
    "flexDirection": "row",
    "backgroundColor" : "#fff",
    "paddingLeft" : 10,
    "paddingRight" : 10,
    "paddingTop" : 10,
    "paddingBottom" : 10,
    "position":"relative"
  },
  rightView : {
    flex: 1
  },
  manager : {
    color : "#666",
    fontSize : 13
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
    "backgroundColor" : "#eee",
    "borderBottomWidth" : 1,
    "borderBottomColor" : "#eee"
  },
  last: {
    color: "#333",
    textAlign : "left",
    paddingLeft: 10,
    flex : 1
  },
  listView: {
    marginBottom:10
  },
  tabList: {
    flexDirection : "row"
  },
  alltab : {
    width:90,
    height : 40, 
    marginRight:10,
    alignItems:"center",
    justifyContent:"center"
  },
  pickerStyle: {
    width : bodyWidth,
    height: 30
  },
  allactive: {
    width:90,
    height : 40, 
    borderBottomWidth:1,
    borderBottomColor:"#3ad88f",
    marginRight:10,
    alignItems:"center",
    justifyContent:"center"
  },
  alltext: {
    width:80,
    color: "#333",
    textAlign:"center"
  },
  activetext: {
    color:"#3ad88f",
    textAlign:"center",
    width:80,
    textAlign:"center"   
  },
  pikerView: {
    position :'absolute',
    width : bodyWidth,
    height:180,
    paddingTop:20,
    bottom: 0,
    left:0,
    backgroundColor: "#fff",
    "borderTopWidth" : 1,
    "borderTopColor" : "#ccc",
    opacity : 0,
    zIndex:-1
  },
  pikershowView: {
    position :'absolute',
    width : bodyWidth,
    height:180,
    paddingTop:20,
    bottom: 0,
    left:0,
    backgroundColor: "#fff",
    "borderTopWidth" : 1,
    "borderTopColor" : "#ccc",
    zIndex:3,
    opacity : 1
  },
  pickerplat : {
    width:100,
    height : 32, 
    borderWidth:1,
    borderRadius:5,
    borderColor:"#428bca",
    marginRight:10,
    alignItems:"center"
  },
  completeBtn : {
    width:200,
    height:60,
    paddingTop:10,
    paddingRight:10,
    position: "absolute",
    zIndex:2,
    top:0,
    right:0
  },
  comtext:{
    width:200,
    height:60,
    paddingRight:10,
    textAlign:"right",
    color: "#428bca"
  },
  nodata: {
    paddingTop:20,
    paddingBottom:20,
    fontSize:15,
    textAlign:"center"
  },
  oneTab: {
    flex:1,
    alignItems:"center"
  },
  time: {
    position:"absolute",
    right:5,
    color:"#000",
    top:10,
    textAlign:"right",
    width:80,
    zIndex:2
  }
}


module.exports = listStyle;