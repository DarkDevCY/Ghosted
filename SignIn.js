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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

export const signIn = (props) => {
  const [username, setUsername] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.firstBox}></View>
        <View style={styles.secondBox}></View>
        <View style={styles.centerForm}>
          <TextInput
            style={styles.username}
            placeholder="username"
            value={username.value}
            onChangeText={(text) => setUsername({value: text, error: ''})}
          />
          <TextInput
            style={styles.password}
            secureTextEntry={true}
            placeholder="password"
            value={password.value}
            onChangeText={(text) => setPassword({value: text, error: ''})}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              let name = username.value;
              let pass = password.value;
              console.log(name, pass);

              async function componentDidMount() {
                try {
                  await fetch('http://10.0.2.2:3000/users/login', {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      username: name,
                      password: pass,
                    }),
                  });
                } catch (e) {
                  console.log(e);
                }
              }
              componentDidMount();
            }}>
            <Text style={styles.signText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  firstBox: {
    position: 'absolute',
    width: 300,
    height: 400,
    borderStyle: 'solid',
    borderWidth: 50,
    borderColor: 'orange',
    borderRadius: 90,
    top: -145,
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
  button: {
    backgroundColor: '#0085FF',
    width: 300,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  signText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  centerForm: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
