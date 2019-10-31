import React from 'react';
import { View, StyleSheet, FlatList, Text, ScrollView } from 'react-native';
import RecipePresentation from '../components/RecipePresentation';

class RecipePage extends React.Component {
  state = {
    ingredients: [
      {
        number: '26',
        text: 'cl de lait'
      },
      {
        number: '100',
        text: 'g de sucre'
      },
      {
        number: '120',
        text: 'g de beurre'
      }
    ]
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        horizontal={false}
      >
        <RecipePresentation />
        <View style={styles.containerRecette}>
          <View style={styles.containerIngredients}>
            <FlatList
              contentContainerStyle={styles.ingredientsList}
              data={this.state.ingredients}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) =>
                // <IngredientsListItem name={item} onDelete={this.onDeleteButtonPress}></IngredientsListItem>

                <View>
                  <Text>{item.number} {item.text}</Text>
                </View>
              }
            />
          </View>
          <View style={styles.containerPreparation}>

          </View>
        </View>
      </ScrollView>
    );
  };
}

export default RecipePage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  containerRecette: {
    flex: 2,
    flexDirection: 'row'
  },
  containerIngredients: {
    flex: 2,
  },
  ingredientsList: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 10
    // justifyContent: 'center'
  },
  containerPreparation: {
    flex: 3,
    backgroundColor: '#0000ff'
  }
});