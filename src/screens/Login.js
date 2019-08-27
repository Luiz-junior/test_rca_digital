import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput } from 'react-native';

const users = [
  { email: 'luiz@gmail.com', password: '123123' },
  { email: 'junior@gmail.com', password: '123123' },
];

class Login extends Component {

  state ={
    email: '',
    password: ''
  };

  onLogin = () => {
    
  };

  render() {
    const { email, password } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}> Post ME 
          <Text style={{ fontWeight: 'bold', }}> APP </Text> 
        </Text>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Seja bem Vindo a nova {'\n'} Agência Digital</Text>
          
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
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#90240D',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 15,
  },
  card: {
    height: 300,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#999',
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
    backgroundColor: '#90240D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 18
  }
});

export default Login;
