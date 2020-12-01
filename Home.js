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

import {DrawerNavigation} from './Main';
import {withSafeAreaInsets} from 'react-native-safe-area-context';

import SlidingUpPanel from 'rn-sliding-up-panel';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');

export const Home = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/top_rated?api_key=',
        );
        setMovies(
          response.data.results.map((m) => ({
            id: m.id,
            title: m.title,
            rating: m.vote_average / 2,
            image: m.poster_path,
          })),
        );
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const [newMovies, setNewMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseNew = await axios.get(
          'https://api.themoviedb.org/3/movie/now_playing?api_key=',
        );
        setNewMovies(
          responseNew.data.results.map((n) => ({
            id: n.id,
            title: n.title,
            rating: n.vote_average / 2,
            image: n.poster_path,
          })),
        );
        console.log(responseNew);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  console.log(newMovies);

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <DrawerNavigation />
        <View style={{width: width, height: height, backgroundColor: 'white'}}>
          <ScrollView>
            <ScrollView scrollEventThrottle={16}>
              <TouchableOpacity
                style={styles.icon}
                onPress={() => this._panel.show()}>
                <Image source={require('./images/user.png')} />
              </TouchableOpacity>
              <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
                <View style={styles.containerText}>
                  <View style={styles.line}></View>
                  <Text style={styles.featuredText}>Featured</Text>
                </View>
                <View style={{height: 220, marginTop: 20}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {movies.map((movie) => (
                      <Category
                        name={movie.title}
                        score={movie.rating}
                        imageUri={
                          'https://image.tmdb.org/t/p/w500/' + movie.image
                        }
                        key={movie.title}
                      />
                    ))}
                  </ScrollView>
                </View>
              </View>
            </ScrollView>
            <ScrollView scrollEventThrottle={16}>
              <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
                <View style={styles.containerTextSecond}>
                  <View style={styles.line}></View>
                  <Text style={styles.newReleasesText}>Now Playing</Text>
                </View>
                {newMovies.map((movie) => (
                  <BigMovie
                    name={movie.title}
                    score={movie.rating}
                    imageUri={'https://image.tmdb.org/t/p/w500/' + movie.image}
                    key={movie.title}
                  />
                ))}
              </View>
            </ScrollView>
          </ScrollView>
          <SlidingUpPanel ref={(c) => (this._panel = c)}>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.closePanel}
                onPress={() => this._panel.hide()}>
                <Image source={require('./images/cancel.png')} />
              </TouchableOpacity>
              <View style={styles.wrapperSlideUp}>
                <View style={styles.wrapperInfo}>
                  <View style={styles.wrapperInfoIcon}>
                    <Image source={require('./images/user.png')} />
                  </View>
                  <View style={styles.wrapperInfoInfo}>
                    <Text style={styles.wrapperInfoName}>Username</Text>
                    <Text style={styles.wrapperInfoEmail}>
                      domain@domain.com
                    </Text>
                  </View>
                </View>
                <View style={styles.wrapperFields}>
                  <View style={styles.mainFieldBox}>
                    <View style={styles.inputField}>
                      <Text style={styles.inputName}>Name</Text>
                    </View>
                    <TouchableOpacity style={styles.editIcon}>
                      <Image
                        source={require('./images/pencil.png')}
                        style={styles.imageEdit}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.mainFieldBox}>
                    <View style={styles.inputField}>
                      <Text style={styles.inputName}>Password</Text>
                    </View>
                    <TouchableOpacity style={styles.editIcon}>
                      <Image
                        source={require('./images/pencil.png')}
                        style={styles.imageEdit}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </SlidingUpPanel>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerText: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 20,
    color: '#333333',
  },
  containerTextSecond: {
    flexDirection: 'row',
    marginTop: 24,
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
  newReleasesText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 14,
  },
  icon: {
    backgroundColor: '#e1e6e2',
    borderRadius: 90,
    width: 45,
    height: 45,
    marginTop: 24,
    marginRight: 23,
    alignSelf: 'flex-end',
    zIndex: 1000,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    height: height,
  },
  closePanel: {
    alignSelf: 'flex-end',
    marginRight: 30,
    marginTop: 25,
  },
  mainFieldBox: {
    flexDirection: 'row',
    width: width - 120,
    height: 40,
    borderColor: '#333',
    borderWidth: 2,
    backgroundColor: '#e1e6e2',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 20,
  },
  editIcon: {
    marginRight: 13,
  },
  imageEdit: {
    height: 20,
    width: 20,
  },
  inputName: {
    paddingLeft: 10,
  },
  wrapperFields: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  wrapperInfo: {
    flexDirection: 'row',
    marginTop: 22,
    marginBottom: 15,
    justifyContent: 'center',
  },
  wrapperInfoInfo: {
    marginLeft: 34,
  },
  wrapperInfoName: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});
