import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './styles/index';
import LoginRegister from './views/LoginRegister';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginRegister />
        {/* <Text style={styles.text}>Winfos</Text>
        <Text>remake</Text> */}
      </View>
    );
  }
}

export default App;
