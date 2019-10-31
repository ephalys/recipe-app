import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class RecipePresentation extends React.Component {
  render() {
    return (
      <View style={styles.containerPresentation}>
        {/* <View style={styles.blocPresentation}>
          <Image style={styles.imagePresentation} source={{ uri: this.props.datas[0].image }}>
            <Text style={styles.namePresentation}></Text>
          </Image>
        </View> */}
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
    flex: 2
  },
  blocPresentation: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePresentation: {
    flex: 9
  },
  namePresentation: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    fontStyle: 'italic'
  },
  presentation: {
    flex: 1.5,
    paddingVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row'
  },
  sousPresentation: {
    flex: 1
  },
  textMainPresentation: {
    fontWeight: 'bold',
    fontSize: 20
  },
  textDescriptionPresentation: {
    fontSize: 16
  }
});