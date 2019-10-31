import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class InputHome extends React.Component {
    render(){
        return(
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={'Search recipes...'}
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => this.setState({ cityName: text })}
                />
            </View>
        );
    };
}

export default InputHome;

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
