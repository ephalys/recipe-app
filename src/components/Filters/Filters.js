import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import FilterButton from "./FilterButton";

class Filters extends React.Component {
    state = {
        filters: [
            {
                type: 'mealType',
                value: 'Breakfast'
            },
            {
                type: 'mealType',
                value: 'Lunch'
            },
            {
                type: 'mealType',
                value: 'Snack'
            },
            {
                type: 'mealType',
                value: 'Dinner'
            },
            {
                type: 'dishType',
                value: 'Bread'
            },
            {
                type: 'dishType',
                value: 'Cereals'
            },
            {
                type: 'dishType',
                value: 'Condiments and sauces'
            },
            {
                type: 'dishType',
                value: 'Drinks'
            },
            {
                type: 'dishType',
                value: 'Desserts'
            },
            {
                type: 'dishType',
                value: 'Main course'
            },
            {
                type: 'dishType',
                value: 'Pancake'
            },
            {
                type: 'dishType',
                value: 'Preps'
            },
            {
                type: 'dishType',
                value: 'Preserve'
            },
            {
                type: 'dishType',
                value: 'Salad'
            },
            {
                type: 'dishType',
                value: 'Sandwiches'
            },
            {
                type: 'dishType',
                value: 'Side dish'
            },
            {
                type: 'dishType',
                value: 'Soup'
            },
            {
                type: 'dishType',
                value: 'Starter'
            },
            {
                type: 'dishType',
                value: 'Sweets'
            },
            {
                type: 'cuisineType',
                value: 'American'
            },
            {
                type: 'cuisineType',
                value: 'Asian'
            },
            {
                type: 'cuisineType',
                value: 'British'
            },
            {
                type: 'cuisineType',
                value: 'Caribbean'
            },
            {
                type: 'cuisineType',
                value: 'Central Europe'
            },
            {
                type: 'cuisineType',
                value: 'Chinese'
            },
            {
                type: 'cuisineType',
                value: 'Eastern Europe'
            },
            {
                type: 'cuisineType',
                value: 'French'
            },
            {
                type: 'cuisineType',
                value: 'Indian'
            },
            {
                type: 'cuisineType',
                value: 'Italian'
            },
            {
                type: 'cuisineType',
                value: 'Japanese'
            },
            {
                type: 'cuisineType',
                value: 'Kosher'
            },
            {
                type: 'cuisineType',
                value: 'Mediterranean'
            },
            {
                type: 'cuisineType',
                value: 'Mexican'
            },
            {
                type: 'cuisineType',
                value: 'Middle Eastern'
            },
            {
                type: 'cuisineType',
                value: 'Nordic'
            },
            {
                type: 'cuisineType',
                value: 'South American'
            },
            {
                type: 'cuisineType',
                value: 'South East Asian'
            },
        ]
    }

    render() {
        return (
            <View style={styles.filtersContainer}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollList}
                >
                    <View style={{ flexDirection: 'row' }} onStartShouldSetResponder={() => true}>
                        {this.state.filters.map((filterObject) =>
                            <FilterButton
                                text={filterObject.value}
                                type={filterObject.type}
                                style={filterObject.type === 'mealType' && filterObject.value === 'Breakfast' ? styles.firstFilter : ((filterObject.type === 'cuisineType' && filterObject.value === 'South East Asian') && styles.lastFilter)}
                            />
                        )}
                    </View>
                </ScrollView>
            </View>
        );
    };
}

export default Filters;

const styles = StyleSheet.create({
    filtersContainer: {
        paddingBottom: 20
    },
    marginLeft: {
        marginLeft: 20
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
    },
    firstFilter: {
        marginLeft: 20
    },
    lastFilter: {
        marginRight: 20
    }
});
