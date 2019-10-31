import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class RecipePresentation extends React.Component {
  render() {
    console.log(this.props.datas[0]);
    return (
      <View style={styles.containerPresentation}>
        <Image style={styles.imagePresentation} source={{ uri: this.props.datas[0].image }} />
        <View style={styles.presentation}>
          <View style={styles.sousPresentation}>
            <Text style={styles.textMainPresentation}>Servings</Text>
            <Text style={styles.textDescriptionPresentation}>{this.props.datas[0].yield}</Text>
          </View>
          <View style={styles.sousPresentation}>
            <Text style={styles.textMainPresentation}>Cooking Time</Text>
            <Text style={styles.textDescriptionPresentation}>{parseInt(this.props.datas[0].totalTime / 60)} hr {this.props.datas[0].totalTime % 60} min</Text>
          </View>
        </View>
      </View>
    );
  };
}

export default RecipePresentation;

const styles = StyleSheet.create({
  containerPresentation: {
    flex: 1.5,
    // backgroundColor: '#00ff00'
  },
  imagePresentation: {
    flex: 6,
    // width: '100%',
    // height: '80%'
  },
  presentation: {
    flex: 6,
    padding: 10,
    // width: '100%',
    // height: '20%',
    flexDirection: 'row'
  },
  sousPresentation: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'space-evenly'
  },
  textMainPresentation: {
    fontWeight: 'bold',
    fontSize: 20
  },
  textDescriptionPresentation: {
    fontSize: 16
  }
});