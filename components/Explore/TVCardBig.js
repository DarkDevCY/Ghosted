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
import 'react-native-gesture-handler';
import Star from 'react-native-star-view';

const {width, height} = Dimensions.get('window');

export const TVCardBig = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.mainView}>
        <View style={{flex: 2}}>
          <Image
            source={{uri: props.imageUri}}
            style={{
              flex: 1,
              width: 150,
              height: 220,
              resizeMode: 'cover',
              borderTopLeftRadius: 6,
              borderBottomLeftRadius: 6,
              justifyContent: 'flex-start',
            }}
          />
        </View>
        <View style={styles.wrapperItems}>
          <Text style={styles.mName}>{props.name}</Text>
          <View style={styles.wrapperInfo}>
            <Star score={props.score} style={styles.starStyle} size={10} />
            <Text style={{paddingLeft: 12}}>{props.score}</Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 14, marginTop: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 17}}>
              Released on:{' '}
            </Text>
            <Text style={styles.createdOn}> {props.released}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    height: 200,
    width: width - 40,
    backgroundColor: '#e1e6e2',
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 22,
  },
  wrapperItemsDesc: {
    justifyContent: 'space-between',
  },
  wrapperItems: {
    width: width - 200,
  },
  mButton: {
    backgroundColor: '#1a8fe8',
    width: width - 200,
    height: 34,
    marginBottom: 20,
    borderRadius: 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  mButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  mName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 14,
    marginTop: 46,
  },
  mDescription: {
    marginLeft: 14,
    marginTop: 7,
  },
  wrapperMainItems: {
    alignSelf: 'flex-end',
  },
  starStyle: {
    height: 20,
    width: 110,
  },
  wrapperInfo: {
    flexDirection: 'row',
    marginLeft: 14,
    marginTop: 10,
  },
  createdOn: {
    marginTop: 3,
  },
});

export default TVCardBig;
