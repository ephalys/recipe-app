import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationEvents } from 'react-navigation';
import ItemFavorite from '../components/ItemFavorite/ItemFavorite';
import { deleteAsync, initAsync } from '../redux/actions/RecipesActions';
import TitlePage from "../components/TitlePage/TitlePage";
import { Transition } from "react-navigation-fluid-transitions";

class FavoritesPage extends React.Component {

	state = {
		refreshing: false
	};

	refresh() {
		this.setState({ refreshing: true });
		this.props.actions.initFavorites();
		this.setState({ refreshing: false });
	}

	deleteFavorite(recipeId) {
		this.props.actions.deleteFavorite(recipeId);
	}

	render() {
		return (
			<View style={styles.container}>
				<NavigationEvents onDidFocus={() => this.refresh()} />
				<TitlePage text={'Favorites'} />
				{this.props.recipes && this.props.recipes.length > 0 ? (
					<FlatList
						style={{ marginTop: 20 }}
						data={this.props.recipes}
						keyExtractor={(item) => item}
						renderItem={(element) => {
							return (
								<ItemFavorite key={element.item} itemID={element.item} onDelete={(itemID) => this.deleteFavorite(itemID)} />
							);
						}}
					/>
				) : (
						<Transition appear="horizontal">
							<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
								<Text style={{ fontSize: 26, color: "#999999" }}>There's nothing to see there</Text>
							</View>
						</Transition>
					)}
			</View>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		flex: 1
	}
});

const mapStateToProps = (stateStore) => {
	return ({
		recipes: stateStore.recipesReducer.recipes
	});
};

const mapActionsToProps = (payload) => ({
	actions: {
		initFavorites: bindActionCreators(initAsync, payload),
		deleteFavorite: bindActionCreators(deleteAsync, payload),
	}
});

export default connect(mapStateToProps, mapActionsToProps)(FavoritesPage);
