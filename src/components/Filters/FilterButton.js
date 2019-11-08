import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { withTheme } from 'react-native-paper';

class FilterButton extends React.Component {

    selectFilter() {
        // TO DO
        // CREER LA REQUÊTE VERS L'API
        // AFFICHER LA PAGE DE RESULTATS FILTRÉS APRÈS LE CLIC SUR UN FILTRE
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.selectFilter} style={[{...styles.button,...this.props.style },{ backgroundColor: this.props.theme.colors.primary }]}>
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
