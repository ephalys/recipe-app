import React from 'react';
import { Text, View, TextInput, StyleSheet, ScrollView } from 'react-native';

class HomePage extends React.Component {
  render(){
    return(
        <ScrollView keyboardShouldPersistTaps="handled" style={styles.homeContainer}>
          <View style={styles.inputContainer}>
            <TextInput
                placeholder={'Search recipes...'}
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(text) => this.setState({ cityName: text })}
            />
          </View>
        </ScrollView>
    );
  };
}

export default HomePage;

const styles = StyleSheet.create({
  homeContainer: {
    margin: 10,
    flex: 1
  },
  inputContainer: {
    marginVertical: 20,
  },
  input: {
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.06,
    shadowRadius: 7.14,
    elevation: 1,
  }
});
