import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../components/Header';
import SlidePhotos from '../components/SlidePhotos';
import api from '../services/api';

class Home extends Component {

  state = {
    photos: [],
    error: '',
  };

  async componentDidMount () {
    try {
      const response = await api.get('/photos');
      this.setState({ photos: response.data });      
    } catch (error) {
      this.setState({ error });
    }
  }

  onCheckFavorite = () => {
    alert('funfou')
  };

  render() {
    const { photos } = this.state;
    return (
        <View>
            <Header />
            <SlidePhotos photos={photos} checkFavorite={this.onCheckFavorite} />
        </View>
    )
  }
};

export default Home;
