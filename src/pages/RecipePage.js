import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { withTheme } from 'react-native-paper';
import RecipePresentation from '../components/RecipePresentation/RecipePresentation';
import ButtonModel from '../components/ButtonModel/ButtonModel';
import IngredientsList from '../components/IngredientsList/IngredientsList';

class RecipePage extends React.Component {
  state = {
    ingredients: [
      {
        label: 'Roasted chicken',
        image: 'https://www.edamam.com/web-img/c24/c24a86f98a8cc1f13f795bdba2dae614.jpg',
        url: 'http://www.epicurious.com/recipes/food/views/Roast-Chicken-394676',
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
      <ScrollView style={styles.container}>
        <RecipePresentation datas={this.state.ingredients} />
        <ButtonModel text={'Start Cooking'} backgroundColor={this.props.theme.colors.primary} url={this.state.ingredients[0].url}/>
        <IngredientsList datas={this.state.ingredients[0].ingredientLines} />
      </ScrollView>
    );
  };
}

export default withTheme(RecipePage);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
