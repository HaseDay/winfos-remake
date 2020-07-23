import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './styles/index';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Winfos</Text>
        <Text>remake</Text>
      </View>
    );
  }
}

export default App;
