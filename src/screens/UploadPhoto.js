import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import api from '../services/api';

class UploadPhoto extends Component {

  state = {
    photo: null,
    error: '',
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
         <View style={{  alignItems: 'center', justifyContent: 'center', }}>
          {photo && (
            <Image
              source={{ uri: photo.uri }}
              style={{ width: 300, height: 300, }}
            />
          )}
          <Button title="Choose Photo" onPress={this.onChoosePhoto} style={{ margin: 30, }} />
        </View> 
    );
  }
}

export default UploadPhoto;
