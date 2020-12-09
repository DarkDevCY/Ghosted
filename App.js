import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerItem from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import {signIn} from './SignIn';
import {Home} from './Home';
import {Register} from './Register';
import {Upcoming} from './Upcoming';
import {TVShows} from './TVShows';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const {width, height} = Dimensions.get('window');

function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Upcoming Movies" component={Upcoming} />
      <Drawer.Screen name="TV Shows" component={TVShows} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SignIn" component={signIn} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={DrawerRoutes} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
