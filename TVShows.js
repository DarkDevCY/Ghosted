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
import {TVShowsCard} from './components/Explore/TVShowsCard';
import {TVCardBig} from './components/Explore/TVCardBig';

const {width, height} = Dimensions.get('window');

export const TVShows = (props) => {
  const [TVShows, setTVShows] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const tvShowsResponse = await axios.get(
          'https://api.themoviedb.org/3/tv/popular?api_key=2cd6bb77b8884b33d36972281670e3bb&language=en-US',
        );
        setTVShows(
          tvShowsResponse.data.results.map((n) => ({
            id: n.id,
            title: n.name,
            rating: n.vote_average / 2,
            image: n.poster_path,
            released: n.first_air_date,
          })),
        );
        //console.log(tvShowsResponse);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const [AiringToday, setAiringToday] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const tvShowsAiringTodayResponse = await axios.get(
          'https://api.themoviedb.org/3/tv/airing_today?api_key=2cd6bb77b8884b33d36972281670e3bb&language=en-US',
        );
        setAiringToday(
          tvShowsAiringTodayResponse.data.results.map((n) => ({
            id: n.id,
            title: n.name,
            rating: n.vote_average / 2,
            image: n.poster_path,
            released: n.first_air_date,
          })),
        );
        //console.log(tvShowsResponse);
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
              <Text style={styles.SectionText}>Featured TV Shows</Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{marginTop: 32}}>
              {TVShows.map((movie) => (
                <TVShowsCard
                  name={movie.title}
                  score={movie.rating}
                  imageUri={'https://image.tmdb.org/t/p/w500/' + movie.image}
                  key={movie.title}
                />
              ))}
            </ScrollView>
            <View style={styles.wrapperSectionText}>
              <View style={styles.line}></View>
              <Text style={styles.SectionText}>Airing Today</Text>
            </View>
            {AiringToday.map((movie) => (
              <TVCardBig
                name={movie.title}
                score={movie.rating}
                released={movie.released}
                imageUri={'https://image.tmdb.org/t/p/w500/' + movie.image}
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
    marginTop: 66,
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
