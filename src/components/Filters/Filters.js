import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import FilterButton from "./FilterButton";

class Filters extends React.Component {
    render(){
        return(
            <View style={styles.filtersContainer}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollList}
                >
                    <View style={{flexDirection: 'row'}} onStartShouldSetResponder = {() => true}>
                        <FilterButton text={'Breakfast'} style={{marginLeft: 20}} />
                        <FilterButton text={'Diner'}/>
                        <FilterButton text={'Low Carbs'}/>
                        <FilterButton text={'Low Fat'}/>
                        <FilterButton text={'Low Fat'}/>
                        <FilterButton text={'Low Fat'}/>
                        <FilterButton text={'Low Fat'}/>
                        <FilterButton text={'Low Fat'}/>
                        <FilterButton text={'Low Fat'}/>
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
    }
});
