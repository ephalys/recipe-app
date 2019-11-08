import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import {Transition} from "react-navigation-fluid-transitions";

class IngredientsList extends React.Component {
    render() {
        return (
            <View style={styles.containerIngredients}>
                <Transition appear="horizontal">
                    <Text style={styles.ingredientsTitle}>Ingredients</Text>
                </Transition>
                <FlatList
                    contentContainerStyle={styles.ingredientsList}
                    data={this.props.ingredients}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>
                        <Transition appear="horizontal">
                            <View
                                style={
                                    (index === this.props.ingredients.length - 1)
                                        ? styles.containerIngredientsListWithoutBorder
                                        : styles.containerIngredientsList
                                }>
                                <Text style={styles.textIngredientsList}>{item}</Text>
                            </View>
                        </Transition>
                    }
                />
            </View>
        );
    };
}

export default IngredientsList;

const styles = StyleSheet.create({
    containerIngredients: {
        flex: 1,
        padding: 20
    },
    ingredientsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    containerIngredientsList: {
        flex: 1,
        paddingVertical: 10,
        borderBottomColor: '#ececec',
        borderBottomWidth: 2
    },
    containerIngredientsListWithoutBorder: {
        flex: 1,
        paddingVertical: 10
    },
    textIngredientsList: {
        fontWeight: '500'
    }
});
