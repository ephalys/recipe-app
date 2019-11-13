import React from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import ListHome from "../components/ListHome/ListHome";
import { withNavigation } from 'react-navigation';
import TitlePage from "../components/TitlePage/TitlePage";
import Icon from 'react-native-vector-icons/Ionicons';

class SearchPage extends React.Component {

	render() {
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.homeContainer}>
					<View style={styles.listHomeContainer}>
						<View style={styles.buttonsTopLeft}>
							<Icon size={35} name={'ios-arrow-back'} style={{ paddingHorizontal: 20 }} color={'#000'} onPress={() => { this.props.navigation.goBack() }} />
							<TitlePage text={'Results for "' + this.props.navigation.state.params.recipeName + '"'} />
						</View>
						<ListHome searchRecipeName={this.props.navigation.state.params.recipeName} />
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	};
}

export default withNavigation(SearchPage);

const styles = StyleSheet.create({
	homeContainer: {
		flex: 1,
	},
	listHomeContainer: {
		flexGrow: 1,
	},
	buttonsTopLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10
	}
});
