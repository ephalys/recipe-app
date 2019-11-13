import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { withTheme } from 'react-native-paper';
import { withNavigation } from 'react-navigation';

class FilterButton extends React.Component {
	selectFilter(filterName) {
		this.props.navigation.navigate('SearchPage', {
			recipeName: filterName
		});
	}

	render() {
		return (
			<View>
				<TouchableOpacity onPress={() => this.selectFilter(this.props.text)} style={[{ ...styles.button, ...this.props.style }, { backgroundColor: this.props.theme.colors.primary }]}>
					<Text style={styles.textButton}>{this.props.text}</Text>
				</TouchableOpacity>
			</View>
		);
	};
}

export default withTheme(withNavigation(FilterButton));

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		padding: 10,
		marginHorizontal: 5,
		borderRadius: 10,
		paddingHorizontal: 15,
	},
	textButton: {
		color: '#fff'
	}
});
