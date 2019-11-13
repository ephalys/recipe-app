import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { Transition } from 'react-navigation-fluid-transitions';
import Dictation from "../Voice/VoiceParameters";
import { withNavigation } from 'react-navigation';

class RecipePresentation extends React.Component {
	render() {
		return (
			<View style={styles.containerPresentation}>
				<Transition shared={this.props.item.id}>
					<ImageBackground style={styles.imageRecipe} source={{ uri: this.props.item.image }}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Transition appear="top">
								<View style={styles.buttonsTopLeft}>
									<Icon size={35} name={'ios-arrow-back'} style={{ paddingHorizontal: 20 }} color={'white'} onPress={() => { this.props.navigation.goBack() }} />
								</View>
							</Transition>
							<Transition appear="top">
								<View style={styles.buttonsTopRight}>
									<Dictation text={steps.split(".")} />
									<FavoriteButton recipeId={this.props.item.id} />
								</View>
							</Transition>
						</View>
						<Text style={styles.titleRecipe}>{this.props.item.label}</Text>
					</ImageBackground>
				</Transition>
				<View style={styles.presentation}>
					<View style={styles.sousPresentation}>
						<Transition appear="horizontal">
							<Text style={styles.textMainPresentation}>Servings</Text>
						</Transition>
						<Transition appear="horizontal">
							<Text style={styles.textDescriptionPresentation}>{this.props.item.yield}</Text>
						</Transition>
					</View>
					<View style={styles.sousPresentation}>
						<Transition appear="horizontal">
							<Text style={styles.textMainPresentation}>Cooking Time</Text>
						</Transition>
						<Transition appear="horizontal">
							<Text style={styles.textDescriptionPresentation}>
								{this.props.item.totalTime == 0 && (
									'NA'
								)}
								{this.props.item.totalTime >= 60 && (
									`${parseInt(this.props.item.totalTime / 60)} hr `
								)}
								{this.props.item.totalTime > 0 && (
									`${this.props.item.totalTime % 60} min`
								)}
							</Text>
						</Transition>
					</View>
				</View>
			</View >
		);
	};
}

const steps = "Place octopus in a pressure cooker and add just enough water to cover. Add a couple of large pinches of salt. Close pressure cooker and bring to high pressure (12 to 15 psi). Once cooker has reached high pressure, cook for 15 minutes.Using steam-release valve, depressurize cooker rapidly. Check octopus for tenderness by sliding a paring knife into the thickest part of one of its tentacles; it should slide in easily with little resistance.";
const test = "If the octopus is not tender enough, return to high pressure and then cook for 5 minutes longer. (Fifteen minutes was the correct time based on all our tests, but variations in the octopus, such as size, and in the pressure cooker used may change the cooking time slightly.) Let octopus cool in its cooking liquid, then drain. Cooked octopus can be refrigerated in a sealed container for up to 2 days before use.To use cooked octopus, cut out and discard the hard beak (if it hasn't been removed already by the fishmonger), which is found in the center of the base of the octopus body, where the tentacles converge. Cut out and discard the section of the head with eyes; the rest of the head is edible. Separate tentacles into individual pieces.To Serve Cold: Cut tentacles and head into pieces and add to a seafood salad or ceviche.To Sear: Leave tentacles whole (or, if very long, cut into manageable sections); cut head meat into large pieces. Heat a tablespoon or two of vegetable oil in a skillet over high heat until shimmering. Add octopus pieces and cook until well browned and crisp, about 3 minutes. Turn and brown on other side, about 3 minutes longer. Season with salt and serve as desired.";

export default withNavigation(RecipePresentation);

const styles = StyleSheet.create({
	containerPresentation: {
		flex: 1,
	},
	blocPresentation: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageRecipe: {
		justifyContent: 'space-between',
		height: 400
	},
	titleRecipe: {
		fontWeight: 'bold',
		color: '#fff',
		fontSize: 40,
		padding: 15,
		textShadowColor: 'rgba(0, 0, 0, 0.05)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 3,
	},
	presentation: {
		paddingVertical: 10,
		marginHorizontal: 20,
		marginTop: 10,
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
		fontSize: 16,
		marginTop: 5
	},
	buttonsTopLeft: {
		flexDirection: 'row',
		top: 20,
		left: 0
	},
	buttonsTopRight: {
		flexDirection: 'row',
		top: 20,
		right: 20,
	}
});
