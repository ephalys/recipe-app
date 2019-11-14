import React from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { withNavigation } from 'react-navigation';

class InputHome extends React.Component {

	state = {
		recipeName: null
	}

	searchRecipe(recipeName) {
		if(recipeName){
			this.props.navigation.navigate('SearchPage', {
				recipeName: recipeName
			});
		}else{
			Alert.alert('Entry error', 'Please, your search may contain at least one letter.');
		}
	}
	
	render() {
		this.props.navigation.addListener(
			'willFocus',
			() => {
				this.state = {
					recipeName: null
				};
				this.textInput.clear();
			}
		)

		return (
			<View style={styles.inputContainer}>
				<TextInput
					ref={input => { this.textInput = input }}
					placeholder={'Search recipes...'}
					style={styles.input}
					underlineColorAndroid="transparent"
					returnKeyType={'search'}
					clearButtonMode={'while-editing'}
					onChangeText={(text) => this.setState({ recipeName: text })}
					onSubmitEditing={() => this.searchRecipe(this.state.recipeName)}
				/>
			</View>
		);
	};
}

export default withNavigation(InputHome);

const styles = StyleSheet.create({
	inputContainer: {
		margin: 20,
	},
	input: {
		borderRadius: 20,
		paddingHorizontal: 15,
		paddingVertical: 12,
		backgroundColor: '#fff',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.12,
		shadowRadius: 10.14,
		elevation: 1,
	}
});
