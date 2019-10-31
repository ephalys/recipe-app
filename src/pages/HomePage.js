import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import InputHome from "../components/InputHome/InputHome";

class HomePage extends React.Component {
  render(){
    return(
        <ScrollView keyboardShouldPersistTaps="handled" style={styles.homeContainer}>
          <InputHome/>
        </ScrollView>
    );
  };
}

export default HomePage;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
});
