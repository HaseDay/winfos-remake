import React, {Component} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class FormLogin extends Component {
  click = () => {
    Alert.alert('Winfos', 'Logado');
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/winfos_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}> Login </Text>

        <TextInput style={styles.input} placeholder="e-mail" />
        <TextInput
          style={styles.input}
          placeholder="senha"
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.click();
          }}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#487',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    borderRadius: 5,
  },
  button: {
    width: 300,
    height: 42,
    backgroundColor: '#422228',
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
