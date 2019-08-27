import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import PostsList from '../components/PostsList';
import api from '../services/api';

class Posts extends Component {

  state = {
    posts: [],
    photo: null,
    error: '',
  };

  async componentDidMount() {
    try {
      const response = await api.get('/photos');
      this.setState({ posts: response.data });  
    } catch (error) {
      this.setState({ error });  
    };
  };

  onChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };

  render() {
    const { photo } = this.state;

    return (
      <View>
        {/* <View style={{  alignItems: 'center', justifyContent: 'center', }}>
          {photo && (
            <Image
              source={{ uri: photo.uri }}
              style={{ width: 300, height: 300, }}
            />
          )}
          <Button title="Choose Photo" onPress={this.onChoosePhoto} style={{ margin: 30, }} />
        </View> */}

        <PostsList posts={this.state.posts} />
      </View>
    );
  }
}

export default Posts;
