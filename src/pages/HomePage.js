import React from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import InputHome from "../components/InputHome/InputHome";
import ListHome from "../components/ListHome/ListHome";
import Filters from '../components/Filters/Filters'
import TitlePage from "../components/TitlePage/TitlePage";

class HomePage extends React.Component {

	render() {
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.homeContainer}>
					<View>
						<InputHome />
					</View>
					<View style={styles.listHomeContainer}>
						<TitlePage text={'What could you cook today ?'} />
						<ListHome />
					</View>
					<View>
						<Filters />
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	};
}

export default HomePage;

const styles = StyleSheet.create({
	homeContainer: {
		flex: 1,
	},
	listHomeContainer: {
		flexGrow: 1,
	},
});
