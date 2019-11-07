import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { withTheme } from 'react-native-paper';
import RecipePresentation from '../components/RecipePresentation/RecipePresentation';
import ButtonModel from '../components/ButtonModel/ButtonModel';
import IngredientsList from '../components/IngredientsList/IngredientsList';
import {Transition} from "react-navigation-fluid-transitions";

class RecipePage extends React.Component {
  state = {
    ingredients: [
      {
        label: 'Chicken Vesuvio',
        image: 'https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg',
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
          <RecipePresentation datas={this.state.ingredients} id={this.props.recipeId} />
          <Transition appear="horizontal">
            <ButtonModel text={'Start Cooking'} backgroundColor={this.props.theme.colors.primary} url={this.state.ingredients[0].url} />
          </Transition>
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

const preparation = 'Rub or pat salt onto breast, legs, and thighs of chicken. Place chicken in a large resealable plastic bag. Set open bag in a large bowl, keeping chicken breast side up. Chill for at least 8 hours and up to 2 days.Arrange a rack in upper third of oven; preheat to 500°F. Set a wire rack in a large heavy roasting pan. Remove chicken from bag. Pat dry with paper towels (do not rinse). Place chicken, breast side up, on prepared rack. Loosely tie legs together with kitchen twine and tuck wing tips under. Brush chicken all over with some of the butter. Pour 1 cup water into pan. Roast chicken, brushing with butter after 15 minutes, until skin is light golden brown and taut, about 30 minutes. Reduce oven temperature to 350°F. Remove chicken from oven and brush with more butter. Let rest for 15-20 minutes. Return chicken to oven; roast, basting with butter every 10 minutes, until skin is golden brown and a thermometer inserted into the thickest part of the thigh registers 165°F, 40-45 minutes. Let rest for 20 minutes. Carve and serve with pan juices.';
