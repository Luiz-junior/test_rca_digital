import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import api from '../services/api';

class Login extends Component {

  state ={
    email: '',
    password: '',
    error: '',
  };

  onLogin = async () => {
    const { email, password } = this.state;

    try {
      const response = await api.get('/users');
      const users = response.data;

      const user = users.filter(u => {
        return u.email === email && u.password === password;
      });

      user.length === 1 
      ? this.props.navigation.navigate('NewAccount')
      : alert('Usuário ou senha incorretos!');
      
    } catch (error) {
      this.setState({ error });
    }

  };

  render() {
    const { email, password } = this.state;

    return (
        <LinearGradient
          colors={['rgb(96, 11, 0)', 'rgb(189, 71, 71)']}
          style={styles.container}
         >
        <Text style={styles.title}> Post ME 
          <Text style={{ fontFamily: 'Lato-Bold', }}> APP </Text> 
        </Text>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Seja bem Vindo a nova {'\n'}Agência Digital</Text>
          
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            onChangeText={value => this.setState({ email: value })}
            value={email}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            onChangeText={value => this.setState({ password: value })}
            value={password}
            secureTextEntry={true}
          />

          <TouchableHighlight style={styles.loginButton} onPress={this.onLogin} underlayColor="#fff"> 
            <Text style={styles.textButton}>Entrar</Text>
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
    height: 300,
    width: '90%',
    
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
  input: {
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 15,
    marginTop: 20,
    width: '90%',
    borderColor: '#ccc',
  },
  loginButton: {
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 15,
    marginTop: 20,
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
