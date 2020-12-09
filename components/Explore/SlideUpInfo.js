import React, {useState, useEffect} from 'react';
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

import axios from 'axios';

import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import {DrawerNavigation} from '../../Main';
import {withSafeAreaInsets} from 'react-native-safe-area-context';

import SlidingUpPanel from 'rn-sliding-up-panel';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Star from 'react-native-star-view';

const {width, height} = Dimensions.get('window');

export const SlideUpInfo = (props) => {
  return (
    <View style={{height: height, width: width, backgroundColor: 'white'}}>
      <SlidingUpPanel ref={(c) => (this._panel2 = c)}>
        <View style={styles.container}>
          <View style={styles.wrapperClose}>
            <Image source={{uri: props.imageUri}} style={styles.imageFirst} />
            <TouchableOpacity
              style={styles.closeContainer}
              onPress={() => this._panel2.hide()}>
              <Image source={require('../../images/cancel.png')} />
            </TouchableOpacity>
          </View>

          <View style={styles.wrapperInfo}>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.createdBy}>By {props.createdBy}</Text>
            <Star score={props.rating} style={styles.score} size={8} />
          </View>

          <View style={styles.wrapperDescription}>
            <Text style={styles.descriptionText}>{props.description}</Text>
            <Image source={{uri: props.descrImage1}} />
            <Image source={{uri: props.descrImage2}} />
            <Image source={{uri: props.descrImage3}} />
            <Image source={{uri: props.descrImage4}} />
          </View>
        </View>
      </SlidingUpPanel>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperClose: {
    flex: 1,
  },
  imageFirst: {
    width: null,
    height: null,
  },
  closeContainer: {
    width: 16,
    height: 16,
  },
  wrapperInfo: {
    justifyContent: 'flex-start',
    marginLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 2,
  },
  createdBy: {
    fontWeight: 'normal',
    fontSize: 14,
    color: '#dedede',
  },
  wrapperDescription: {
    justifyContent: 'flex-end',
    marginLeft: 20,
  },
  descriptionText: {
    color: 'black',
    fontSize: 14,
    letterSpacing: 2,
  },
});
