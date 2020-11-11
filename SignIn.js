import React from 'react';
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

const signIn: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.firstBox}></View>
        <View style={styles.secondBox}></View>
        <View style={styles.centerForm}>
          <TextInput style={styles.username} placeholder="username" />
          <TextInput
            style={styles.password}
            secureTextEntry={true}
            placeholder="password"
            autoCompleteType="password"
          />

          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Main')}>
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

export default signIn;
