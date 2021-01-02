import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

export const ChangePass = (props) => {
  const [pass, setPass] = useState({value: '', error: ''});
  const [rePass, setRePass] = useState({value: '', error: ''});
  const [token, setToken] = useState({ value: '', error: '' });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.firstBox}></View>
        <View style={styles.secondBox}></View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <Text style={{marginTop: 180, fontWeight: 'bold', fontSize: 32}}>
            Reset Password
          </Text>
        </View>
        <View style={styles.centerForm}>
          <TextInput
            style={styles.email}
            placeholder="6-Digit Code"
            value={token.value}
            onChangeText={(text) => setToken({value: text, error: ''})}
          />
          <TextInput
            style={styles.email}
            placeholder="Password"
            value={pass.value}
            onChangeText={(text) => setPass({value: text, error: ''})}
          />
          <TextInput
            style={styles.email}
            placeholder="Repeat Password"
            value={rePass.value}
            onChangeText={(text) => setRePass({value: text, error: ''})}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (token.value != "" && pass.value != "" && rePass.value != "") {
                let tokenAccess = token.value;
                let password = pass.value;
                let repeatPassword = rePass.value;

                if (password == repeatPassword) {
                  async function componentDidMount() {
                    try {
                      await fetch('/forgot/verify', {
                        method: 'POST',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          password: password,
                          repeatPassword: repeatPassword,
                          token: tokenAccess,
                        }),
                      });
                    } catch (e) {
                      console.log(e);
                    }
                  }
                  componentDidMount();
                  props.navigation.navigate('SignIn');
                } else {
                  console.log(pass, rePass, 'They are not the same!');
                }
              } else if (token.value == "") {
                console.log("Token is empty");
              }
            }}>
            <Text style={styles.signText}>Submit</Text>
          </TouchableOpacity>
          <Text
            style={styles.forgotPassText}
            onPress={() => props.navigation.navigate('SignIn')}>
            Back to Login
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  forgotPassText: {
    marginTop: 10,
  },
  firstBox: {
    position: 'absolute',
    width: 300,
    height: 400,
    borderStyle: 'solid',
    borderWidth: 50,
    borderColor: 'orange',
    borderRadius: 90,
    top: 55,
    left: -90,
  },
  secondBox: {
    position: 'absolute',
    width: 300,
    height: 700,
    borderStyle: 'solid',
    borderWidth: 50,
    borderColor: 'orange',
    borderRadius: 90,
    top: 45,
    left: 300,
  },
  username: {
    width: 300,
    height: 50,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    marginBottom: 10,
    backgroundColor: 'white',
    paddingLeft: 15,
  },
  password: {
    width: 300,
    height: 50,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    backgroundColor: 'white',
    paddingLeft: 15,
  },
  email: {
    width: 300,
    height: 50,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    backgroundColor: 'white',
    paddingLeft: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0085FF',
    width: 300,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  signText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  centerForm: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 100,
  },
});
