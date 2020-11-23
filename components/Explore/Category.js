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

export const Category = (props) => {
  return (
    <View>
      <View style={styles.mainView}>
        <View style={{flex: 2}}>
          <Image
            source={props.imageUri}
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
        <Text style={styles.mDescription}>{props.description}</Text>
        <View style={styles.mainContainer}>
          <TouchableOpacity style={styles.mButton}>
            <Text style={styles.mButtonText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#ededed',
    height: 220,
    width: 150,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: '#dddddd',
    borderRadius: 6,
  },
  mName: {
    marginBottom: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  mDescription: {
    paddingLeft: 10,
    fontSize: 12,
    marginBottom: 12,
  },
  mainContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  mButton: {
    backgroundColor: '#1a8fe8',
    width: 130,
    height: 28,
    marginTop: 0,
    borderRadius: 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  mButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default Category;
