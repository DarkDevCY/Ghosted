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
  Button,
  Image,
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
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import Category from './components/Explore/Category';
import {DrawerNavigation} from './Main';

export const Home = (props) => {
  const { width, height } = Dimensions.get('window');
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <DrawerNavigation />
        <View style={{width: width, height: height, backgroundColor: 'white'}}>
          <ScrollView scrollEventThrottle={16}>
            <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
              <View style={styles.containerText}>
                <View style={styles.line}></View>
                <Text style={styles.featuredText}>Featured</Text>
              </View>
              <View style={{height: 220, marginTop: 20}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <Category
                    imageUri={require('./images/Image1.png')}
                    name="Home1"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis... "
                  />
                  <Category
                    imageUri={require('./images/Image2.png')}
                    name="Hello"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis... "
                  />
                  <Category
                    imageUri={require('./images/Image3.png')}
                    name="I am Dark"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis... "
                  />
                  <Category
                    imageUri={require('./images/Image4.png')}
                    name="Bloodshot"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis... "
                  />
                </ScrollView>
              </View>
            </View>
          </ScrollView>
          <ScrollView scrollEventThrottle={16}>
            <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
              <View style={styles.containerTextSecond}>
                <View style={styles.line}></View>
                <Text style={styles.featuredText}>New Releases</Text>
              </View>
              <View style={{height: 240, marginTop: 20}}>
                <ScrollView horizontal={false}></ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerText: {
    flexDirection: 'row',
    marginTop: 60,
    marginLeft: 20,
    color: '#333333',
  },
  containerTextSecond: {
    flexDirection: 'row',
    marginTop: -22,
    marginLeft: 20,
    color: '#333333',
  },
  line: {
    width: 70,
    height: 6,
    backgroundColor: 'orange',
    marginTop: 14,
  },
  featuredText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 14,
  },
});
