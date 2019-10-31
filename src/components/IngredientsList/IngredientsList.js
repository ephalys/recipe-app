import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

class IngredientsList extends React.Component {
  render() {
    return (
      <View style={styles.containerIngredients}>
        <Text style={styles.ingredientsTitle}>Ingredients</Text>
        <FlatList
          contentContainerStyle={styles.ingredientsList}
          data={this.props.datas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) =>
            <View
              style={
                (index === this.props.datas.length - 1)
                  ? styles.containerIngredientsListWithoutBorder
                  : styles.containerIngredientsList
              }>
              <Text style={styles.textIngredientsList}>{item}</Text>
            </View>
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  containerIngredientsList: {
    flex: 1,
    paddingVertical: 10,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 2
  },
  containerIngredientsListWithoutBorder: {
    flex: 1,
    paddingVertical: 10
  },
  textIngredientsList: {}
});