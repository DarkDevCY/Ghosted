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
import SearchCard from './components/Explore/SearchCard';

const {width, height} = Dimensions.get('window');

export const TVShows = (props) => {
  const date = new Date();
  const [TVShows, setTVShows] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tvShowsResponse = await axios.get(
          'https://api.themoviedb.org/3/tv/popular?api_key=&language=en-US',
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
          'https://api.themoviedb.org/3/tv/airing_today?api_key=&language=en-US',
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

  if (searchData.length == 0) {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View
            style={{width: width, height: height, backgroundColor: 'white'}}>
            <ScrollView>
              <View
                style={{width: width, justifyContent: 'center', marginTop: 35}}>
                <SearchCard setSearch={setSearchData} data={searchData} />
              </View>
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
                  released={date.toLocaleDateString(movie.released)}
                  imageUri={'https://image.tmdb.org/t/p/w500/' + movie.image}
                  key={movie.title}
                />
              ))}
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    );
  } else {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View
            style={{
              width: width,
              height: height,
              backgroundColor: 'white',
            }}>
            <ScrollView>
              <TouchableOpacity
                onPress={() => setSearchData([])}
                style={{
                  flexDirection: 'row',
                  marginLeft: 20,
                  marginTop: 40,
                  marginBottom: 7,
                }}>
                <Image
                  source={require('./images/left-arrow.png')}
                  style={{width: 20, height: 20, marginRight: 10}}
                />
                <Text style={{color: '#333333', fontSize: 16}}>Back</Text>
              </TouchableOpacity>
              <View style={styles.containerText}>
                <View style={styles.line}></View>
                <Text style={styles.searchText}>Search Results for: </Text>
                <Text style={styles.searchInputText}>Bloodshot</Text>
              </View>
              <ScrollView scrollEventThrottle={16}>
                {searchData.map((search) => (
                  <BigMovie
                    key={search.title}
                    name={search.title}
                    score={search.rating}
                    imageUri={'https://image.tmdb.org/t/p/w500/' + search.image}
                    released={date.toLocaleDateString(search.released)}
                  />
                ))}
              </ScrollView>
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  containerText: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 20,
    color: '#333333',
  },
  wrapperSectionText: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 32,
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
  line: {
    width: 70,
    height: 6,
    backgroundColor: 'orange',
    marginTop: 14,
  },
  searchText: {
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: 14,
  },
  searchInputText: {
    fontSize: 16,
    marginLeft: 4,
    marginTop: 4,
  },
});
