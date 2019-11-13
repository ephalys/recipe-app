import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { withTheme } from 'react-native-paper';
import RecipePresentation from '../components/RecipePresentation/RecipePresentation';
import ButtonModel from '../components/ButtonModel/ButtonModel';
import IngredientsList from '../components/IngredientsList/IngredientsList';
import { Transition } from "react-navigation-fluid-transitions";

class RecipePage extends React.Component {
	render() {
		return (
			<ScrollView style={styles.container}>
				<RecipePresentation item={this.props.navigation.state.params.item} />
				<Transition appear="horizontal">
					<ButtonModel text={'Start Cooking'} backgroundColor={this.props.theme.colors.primary} url={this.props.navigation.state.params.item.url} />
				</Transition>
				<IngredientsList ingredients={this.props.navigation.state.params.item.ingredientLines} />
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
