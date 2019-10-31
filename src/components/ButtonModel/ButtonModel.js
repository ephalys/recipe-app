import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class ButtonModel extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={[styles.startButton, { backgroundColor: this.props.backgroundColor }]}>
          <Text style={styles.textStartButton}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  };
}

export default ButtonModel;

const styles = StyleSheet.create({
  startButton: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 20
  },
  textStartButton: {
    color: '#ffffff'
  }
});