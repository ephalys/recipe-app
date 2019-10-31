import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { withTheme } from 'react-native-paper';

class ButtonModel extends React.Component {

    render() {
        return (
            <View>
                <TouchableOpacity style={[styles.button, { backgroundColor: this.props.theme.colors.primary }]}>
                    <Text style={styles.textButton}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        );
    };
}

export default withTheme(ButtonModel);

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
