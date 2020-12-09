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
import SlidingUpPanel from 'rn-sliding-up-panel';

const {width, height} = Dimensions.get('window');

export const TVShowsCard = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.mainView}>
        <View style={{flex: 2}}>
          <Image
            source={{uri: props.imageUri}}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover',
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
            }}
          />
        </View>
        <Text style={styles.mName}>{props.name}</Text>
        <View style={styles.wrapperInfo}>
          <Star score={props.score} style={styles.starStyle} size={10} />
          <Text style={{paddingLeft: 10}}>{props.score}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#e1e6e2',
    height: 250,
    width: 156,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: '#dddddd',
    borderRadius: 8,
  },
  mName: {
    marginBottom: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  mDescription: {
    paddingLeft: 10,
    fontSize: 12,
    marginBottom: 12,
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 10,
    marginLeft: 10,
  },
  wrapperInfo: {
    flexDirection: 'row',
  },
});

export default TVShowsCard;
