import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class RecipePresentation extends React.Component {
  render() {
    return (
      <View style={styles.containerPresentation}>
        <Image style={styles.imagePresentation} source={{uri: `https://www.edamam.com/web-img/c24/c24a86f98a8cc1f13f795bdba2dae614.jpg`}} />
        <View style={styles.presentation}>
          <View style={styles.sousPresentation}>
            <Text style={styles.textPresentation}>Temps</Text>
            <Text style={styles.textPresentation}>1h10</Text>
          </View>
          <View style={styles.sousPresentation}>
            <Text style={styles.textPresentation}>Personne(s)</Text>
            <Text style={styles.textPresentation}>3</Text>
          </View>
          <View style={styles.sousPresentation}>
            <Text style={styles.textPresentation}>Santé</Text>
            <Text style={styles.textPresentation}>Vegan</Text>
          </View>
          <View style={styles.sousPresentation}>
            <Text style={styles.textPresentation}>Calories</Text>
            <Text style={styles.textPresentation}>256/100g</Text>
          </View>
        </View>
      </View>
    );
  };
}

export default RecipePresentation;

const styles = StyleSheet.create({
  containerPresentation: {
    flex: 5,
    backgroundColor: '#00ff00'
  },
  imagePresentation: {
    // flex: 4,
    width: '100%',
    height: '80%'
  },
  presentation: {
    // flex: 1,
    width: '100%',
    height: '20%',
    flexDirection: 'row'
  },
  sousPresentation: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  textPresentation: {}
});