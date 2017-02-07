import * as LoginState from './LoginState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
import LoginStyle from '../../css/LoginStyle.js';

import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Alert,
  ScrollView,
  findNodeHandle,
  Keyboard,
  Dimensions
} from 'react-native';

var time = Math.random();

const LoginView = React.createClass({

  getInitialState: function(){
    return {};
  },

  changeCode() {
    this.props.dispatch(LoginState.changeCode());
  },

  bored() {
    this.props.dispatch(NavigationState.pushRoute({
      key: 'Color',
      title: 'Color Screen'
    }));
  },

  changeMail (email) {
    var last = email.substr(email.length - 1,1);
      if (/@$/.test(email) && last == "@" ) {
          email = email + "camera360.com";
      }
      this.props.dispatch(LoginState.fullEmail(email));
  },

  fullPassword (password) {
    this.props.dispatch(LoginState.fullPassword(password));
  },

  fullCode (code) {
    this.props.dispatch(LoginState.fullCode(code));
  },

  handlerLogin () {
     var email = this.props.email;
     var password = this.props.password;
     var code = this.props.code;
     var postData = {
        email: email,
        password: password,
        code: code
     }
     this.props.dispatch(LoginState.handlerLogin(postData));
  },

  render() {
    console.log(1111);
    console.log(this.state);
    console.log(this.props);
    return (
      <ScrollView ref='scroll' keyboardShouldPersistTaps="always" style={styles.mainView} >
        <View style={styles.mainView} onStartShouldSetResponderCapture={(e) => {
                let target = e.nativeEvent.target;
                if (target !== findNodeHandle(this.refs.loginBtn) && target !== findNodeHandle(this.refs.email) &&  target !== findNodeHandle(this.refs.password) && target !== findNodeHandle(this.refs.code)) {
                    this.refs.email.blur();
                    this.refs.password.blur();
                    this.refs.code.blur();
                    this.refs.scroll.scrollTo({y:0,x:0,animated:true})
                }
             }}>
           <View style={styles.imgBox}>
               <Image style={styles.logo} source={require('../../resource/images/logo.png')} />
               <Text style={styles.indexText}>品果大家庭</Text>
           </View>

           <View style={styles.box}>
               <View style={styles.line}>
                <View style={styles.border}>
                    <TextInput
                          underlineColorAndroid = "transparent"
                          autoCapitalize={"none"}
                          style={styles.inputItem}
                          placeholder="请输入你的邮箱"
                          ref = "email"
                          autoCorrect={false}
                          defaultValue={this.props.email}
                          onChangeText={this.changeMail}
                    />
                </View>
             </View>

             <View style={styles.line}>
                 <View style={styles.border}>
                      <TextInput
                          underlineColorAndroid = "transparent"
                          style={styles.inputItem}
                          secureTextEntry={true}
                          autoCapitalize={"none"}
                          placeholder="请输入你的密码"
                          autoCorrect={false}
                          ref="password"
                          defaultValue={this.props.password}
                          onChangeText={this.fullPassword}
                      />
                </View>
             </View>

             <View style={styles.line}>
               <View style={styles.border}>
                  <TextInput
                      underlineColorAndroid = "transparent"
                      style={styles.codeInp}
                      placeholder="请输入验证码"
                      autoCorrect={false}
                      maxLength={4}
                      autoCapitalize={"none"}
                      ref="code"
                      onChangeText={this.fullCode}
                  />
               </View>
               <TouchableOpacity style={styles.codeImg} underlayColor={"rgba(0,0,0,0)"} onPress={this.changeCode}>
                   <Image key={"code" + this.props.time} source={{uri: 'https://toolchain.camera360.com/user/captcha?ran=' + this.props.time}} style={styles.codeImg} />
               </TouchableOpacity>
             </View>

             <View style={styles.line}>
              <TouchableOpacity style={styles.btn} onPress={this.handlerLogin}>
                 <View style={styles.loginBtn} ref="loginBtn">
                    <Text style={styles.loginText}>登 录</Text>
                 </View>
              </TouchableOpacity>
             </View>
           </View>
        </View>
      </ScrollView>
    )
  }
});

const styles = StyleSheet.create(LoginStyle);

export default LoginView;
