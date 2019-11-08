import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import ListItem from './ListItem'
import TitlePage from "../TitlePage/TitlePage";
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import LoadingView from '../../components/LoadingView/LoadingView';

class ListHome extends React.Component {
	state = {
		datas: null
	};

	componentDidMount() {
		this.props.recipeServ.getRecipesHome()
			.then((datas) => {
				this.setState({
					datas: datas.data.hits
				});
			})
			.catch((err) => {
				alert(err);
			});
	}

	render() {
		return (
			this.state.datas !== null ? (
				<View style={{ flex: 1 }}>
					<TitlePage text={'What could you cook today ?'} />
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={styles.scrollList}
					>
						<View style={{ flexDirection: 'row' }} onStartShouldSetResponder={() => true}>
							{this.state.datas.map((data) =>
								<ListItem item={data} key={data.recipe.uri.split('_')[1]} />
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
