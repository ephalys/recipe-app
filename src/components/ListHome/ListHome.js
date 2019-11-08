import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import ListItem from './ListItem'
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import LoadingView from '../../components/LoadingView/LoadingView';

class ListHome extends React.Component {
	state = {
		datas: null
	};

	componentDidMount() {
		if(!this.props.searchRecipeName) {
			this.props.recipeServ.getRecipesHome()
				.then((datas) => {
					let tab = [];
					datas.data.hits.map((data) => {
						tab.push({
							uri: data.recipe.uri,
							label: data.recipe.label,
							image: data.recipe.image,
							url: data.recipe.url,
							yield: data.recipe.yield,
							ingredientLines: data.recipe.ingredientLines,
							totalTime: data.recipe.totalTime,
							id: data.recipe.uri.split('_')[1]
						});
					});
					this.setState({
						datas: tab
					});
				})
				.catch((err) => {
					alert(err);
				});
		} else {
			this.props.recipeServ.searchRecipe(this.props.searchRecipeName)
				.then((datas) => {
					let tab = [];
					datas.data.hits.map((data) => {
						tab.push({
							uri: data.recipe.uri,
							label: data.recipe.label,
							image: data.recipe.image,
							url: data.recipe.url,
							yield: data.recipe.yield,
							ingredientLines: data.recipe.ingredientLines,
							totalTime: data.recipe.totalTime,
							id: data.recipe.uri.split('_')[1]
						});
					});
					this.setState({
						datas: tab
					});
				})
				.catch((err) => {
					alert(err);
				});
		}
	}

	render() {
		return (
			this.state.datas !== null ? (
					<View style={{ flex: 1 }}>
						<ScrollView
							horizontal={true}
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={styles.scrollList}
						>
							<View style={{ flexDirection: 'row' }} onStartShouldSetResponder={() => true}>
								{this.state.datas.map((data) =>
									<ListItem item={data} key={data.id} />
								)}
							</View>
						</ScrollView>
					</View>
			) : (
				<LoadingView />
			)
		);
	};
}

const mapStateToProps = (stateStore) => ({
	recipeServ: stateStore.serviceReducer.recipeService,
});

export default withNavigation(connect(mapStateToProps)(ListHome));

const styles = StyleSheet.create({
	scrollList: {
		alignItems: 'center',
		paddingVertical: 20
	}
});
