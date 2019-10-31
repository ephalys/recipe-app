import React from 'react';
import { View, StyleSheet, FlatList, Text, ScrollView, TouchableOpacity } from 'react-native';
import RecipePresentation from '../components/RecipePresentation/RecipePresentation';

class RecipePage extends React.Component {
  state = {
    ingredients: [
      {
        image: 'https://www.edamam.com/web-img/c24/c24a86f98a8cc1f13f795bdba2dae614.jpg',
        yield: 4,
        dietLabels: [
          'Low-Carb'
        ],
        ingredientLines: [
          '1 tablespoon kosher salt',
          '1 whole 4-pound chicken, giblets reserved for another use',
          '1/4 cup (1/2 stick) unsalted butter, melted'
        ],
        calories: 2385,
        totalWeight: 980,
        totalTime: 320
      }
    ]
  };

  render() {
    return (
      <View
        style={styles.container}
      // horizontal={false}
      >
        <RecipePresentation datas={this.state.ingredients} />
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.textStartButton}>Start Cooking</Text>
        </TouchableOpacity>
        {/* <View style={styles.containerRecette}>
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
            </View> */}
      </View>
    );
  };
}

export default RecipePage;

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // height: '100%',
    flex: 1
  },
  startButton: {
    flex: 1.5
  },
  textStartButton: {
    color: '#ffffff'
  },
  containerRecette: {
    flex: 2.5,
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