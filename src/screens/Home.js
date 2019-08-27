import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../components/Header';
import SlidePhotos from '../components/SlidePhotos';

class Home extends Component {
  render() {
    return (
        <View>
            <Header />
            <SlidePhotos />
        </View>
    )
  }
};

export default Home;
