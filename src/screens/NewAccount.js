import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';

import api from '../services/api';

class Login extends Component {

    state = {
        photo: null,
        lastId: 0,
        error: '',
    };

    async componentDidMount() {
        const response = await api.get('/photos');
        const lastId = response.data[response.data.length -1];

        this.setState({ lastId: lastId.id });
    }

    onChoosePhoto = () => {
        const options = {
          noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) 
                this.setState({ photo: response });
        });        
    };

    onContinue = async () => {
        const { photo, lastId } = this.state;
        try {
            await api.post('/photos', { id: lastId + 1, url: photo.uri, favorite: false } );
            
            this.props.navigation.navigate('Home');
        } catch (error) {
            alert("Selecione uma foto para continuar!");
            this.setState({ error });
        }
    };

    render() {
        const { photo } = this.state;

        return (
            <LinearGradient colors={['rgb(96, 11, 0)', 'rgb(189, 71, 71)']} style={styles.container} >
                <Text style={styles.title}> Post ME 
                    <Text style={{ fontFamily: 'Lato-Bold', }}> APP </Text> 
                </Text>

            <View style={styles.card}>
                <Text style={styles.subtitle}>
                    <Text style={styles.textUser}>Natália,</Text> seja bem-vinda! 
                </Text>

                <Text style={styles.content}>
                    Para iniciar seu primeiro acesso,
                    por favor preencha com seus dados abaixo:
                </Text>

                <View style={{  alignItems: 'center', justifyContent: 'center', }}>
                    { photo ? 
                        (
                            <Image
                            source={{ uri: photo.uri }}
                            style={styles.image}
                            />
                        ) :
                        (
                            <TouchableHighlight onPress={this.onChoosePhoto} style={styles.choosePhotoButton}>
                                <View style={{ alignItems: 'center' }}>
                                    <Image
                                        style={styles.PhotoImage}
                                        source={{ uri: 'https://icon-library.net/images/camera-icon-white/camera-icon-white-15.jpg' }}
                                    />
                                    <Text style={styles.photoText}>Adicionar foto</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    } 
                </View> 

                <TouchableHighlight style={styles.registerButton} onPress={this.onContinue} underlayColor="#fff"> 
                    <Text style={styles.textButton}>Continuar</Text>
                </TouchableHighlight>
            </View>
            </LinearGradient>
        );
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '10%',
  },
  title: {
    fontSize: 25,
    fontFamily: 'Lato-Light',
    color: '#fff',
    marginBottom: 25,
  },
  card: {
    height: 330,
    width: '90%',    
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Lato-Light',
    color: 'rgb(102, 102, 102)',
    marginLeft: 15,
    marginTop: 15,
  },
  textUser: {
    fontFamily: 'Lato-Bold',
    color: 'rgb(96, 0, 0)',
  },    
  content: {
    width: '80%',
    marginTop: 10,
    color: '#777',
    textAlign: 'center',
  },    
  image: {
    width: 100, height: 100,
    borderRadius: 100,
    marginTop: 30,
  },    
  choosePhotoButton: {
    marginTop: 30, 
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'rgb(189, 71, 71)', 
    justifyContent: 'center',
    alignItems: 'center',
  },    
  photoText: {
    fontFamily: 'Lato-Regular',
    fontSize: 10,
    alignItems: 'center',
    color: '#fff',
    width: 50,
    textAlign: 'center'
  },    
  PhotoImage: {
    height: 40,
    width: 40,
  },    
  registerButton: {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 50,
    width: '90%',
    height: 50,
    backgroundColor: 'rgb(96, 11, 0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 18
  }
});

export default Login;
