import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import {signIn} from './SignIn';
import {Home} from './Home';
import {Register} from './Register';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SignIn" component={signIn} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Main" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
