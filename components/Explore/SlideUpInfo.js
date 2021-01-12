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
  Modal,
} from 'react-native';
import axios from 'axios';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import {DrawerNavigation} from '../../Main';
import {withSafeAreaInsets} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Star from 'react-native-star-view';

const {width, height} = Dimensions.get('window');

export const SlideUpInfo = (props) => {
  return (
    <View style={{height: height, width: width, backgroundColor: 'white'}}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.visible}
        style={{width: width}}>
        <TouchableOpacity onPress={() => props.setVisible(false)}>
          <Image source={require('../../images/cancel.png')} />
        </TouchableOpacity>
        <Text>{props.name}</Text>
      </Modal>
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
