import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { withTheme } from 'react-native-paper';

class FilterButton extends React.Component {

    render() {
        return (
            <View>
                <TouchableOpacity style={[{...styles.button,...this.props.style },{ backgroundColor: this.props.theme.colors.primary }]}>
                    <Text style={styles.textButton}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        );
    };
}

export default withTheme(FilterButton);

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
