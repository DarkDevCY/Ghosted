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

const {width, height} = Dimensions.get('window');

export const BigMovie = (props) => {
  return (
    <View>
      <View style={styles.mainView}>
        <View style={{flex: 2}}>
          <Image
            source={props.imageUri}
            style={{
              flex: 1,
              width: 120,
              height: 200,
              resizeMode: 'cover',
              borderTopLeftRadius: 6,
              borderBottomLeftRadius: 6,
              justifyContent: 'flex-start',
            }}
          />
        </View>
        <View style={styles.wrapperItemsDesc}>
          <View style={styles.wrapperMainItems}>
            <Text style={styles.mName}>{props.name}</Text>
            <Text style={styles.mDescription}>{props.description}</Text>
          </View>
          <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.mButton}>
              <Text style={styles.mButtonText}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    fontSize: 20,
    marginLeft: 20,
    marginTop: 16,
  },
  mDescription: {
    marginLeft: 20,
    marginTop: 7,
  },
    wrapperMainItems: {
    alignSelf: 'flex-end'
  },
});

export default BigMovie;
