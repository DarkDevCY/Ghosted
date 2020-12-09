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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import Category from './components/Explore/Category';
import BigMovie from './components/Explore/BigMovie';

//import {DrawerNavigation} from './Main';
import {withSafeAreaInsets} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SlidingUpPanel from 'rn-sliding-up-panel';
import {UpcomingCard} from './components/Explore/UpcomingCard';

const {width, height} = Dimensions.get('window');

export const Upcoming = (props) => {
  const [upcoming, setComing] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const upcomingResponse = await axios.get(
          'https://api.themoviedb.org/3/movie/upcoming?api_key=',
        );
        setComing(
          upcomingResponse.data.results.map((n) => ({
            id: n.id,
            title: n.title,
            rating: n.vote_average / 2,
            image: n.poster_path,
            releasing: n.release_date,
            overview: n.overview,
          })),
        );
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{width: width, height: height, backgroundColor: 'white'}}>
          <ScrollView>
            <View style={styles.wrapperSectionText}>
              <View style={styles.line}></View>
              <Text style={styles.SectionText}>Upcoming Movies</Text>
            </View>
            {upcoming.map((movie) => (
              <UpcomingCard
                imageUri={'https://image.tmdb.org/t/p/w500/' + movie.image}
                name={movie.title}
                releasing={movie.releasing}
                key={movie.title}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperSectionText: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 50,
  },
  line: {
    width: 70,
    height: 6,
    backgroundColor: 'orange',
    marginTop: 14,
  },
  SectionText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 14,
  },
});
