import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

class ButtonModel extends React.Component {

  onSeeRecipePress = () => {
    WebBrowser.openBrowserAsync(this.props.url);
  };

  render() {
    return (
        <TouchableOpacity style={[{ ...styles.startButton, ...this.props.style }, { backgroundColor: this.props.backgroundColor }]} onPress={this.onSeeRecipePress}>
          <Text style={styles.textStartButton}>{this.props.text}</Text>
        </TouchableOpacity>
    );
  };
}

export default ButtonModel;

const styles = StyleSheet.create({
  startButton: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 20,
    marginVertical: 10
  },
  textStartButton: {
    color: '#ffffff',
    fontSize: 20
  }
});
