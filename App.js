import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>React Native Test component</Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 200
  },
});
