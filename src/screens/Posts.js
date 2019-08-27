import React, { Component } from 'react';
import { View, Text, } from 'react-native';

import PostsList from '../components/PostsList';
import api from '../services/api';

class Posts extends Component {

  state = {
    posts: [],
    error: ''
  };

  async componentDidMount() {
    try {
      const response = await api.get('/photos');
      this.setState({ posts: response.data });  
    } catch (error) {
      this.setState({ error });  
    };
  };

  render() {
    return (
      <View>
        <PostsList posts={this.state.posts} />
      </View>
    );
  }
}

export default Posts;
