import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { Transition } from "react-navigation-fluid-transitions";
import { withNavigation } from 'react-navigation';

class ListItem extends React.Component {
	render() {
		return (
			<TouchableHighlight
				style={styles.listItem}
				onPress={() => {
					this.props.navigation.navigate('RecipePage', {
						item: this.props.item
					});
				}}
			>
				<Transition shared={this.props.item.id}>
					<ImageBackground source={{ uri: this.props.item.image }} style={styles.imageContainer}>
						<View style={styles.buttonsTop}>
							<FavoriteButton recipeId={this.props.item.id} />
						</View>
						<Text style={styles.titleRecipe}>
							{this.props.item.label}
						</Text>
					</ImageBackground>
				</Transition>
			</TouchableHighlight>
		)
	}
}

export default withNavigation(ListItem);

const styles = StyleSheet.create({
	listItem: {
		height: '100%',
		width: 280,
		marginLeft: 20,
		borderRadius: 20,
		backgroundColor: '#fff',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.12,
		shadowRadius: 10.14,
		elevation: 1,
	},
	imageContainer: {
		flex: 1,
		borderRadius: 20,
		justifyContent: 'flex-end',
		overflow: 'hidden'
	},
	titleRecipe: {
		fontWeight: 'bold',
		color: '#fff',
		fontSize: 40,
		padding: 15,
		textShadowColor: 'rgba(0, 0, 0, 0.10)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 3,
	},
	buttonsTop: {
		position: 'absolute',
		flexDirection: 'row',
		top: 20,
		right: 20
	}
});
