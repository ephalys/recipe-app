import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import { withTheme } from 'react-native-paper';
import ButtonModel from "../ButtonModel/ButtonModel";
import ListItem from "../ListHome/ListItem";

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
                        <ButtonModel text={'Breakfast'} style={{...styles.button, ...{marginLeft: 20}}} backgroundColor={this.props.theme.colors.primary} />
                        <ButtonModel text={'Diner'} style={styles.button} backgroundColor={this.props.theme.colors.primary} />
                        <ButtonModel text={'Low Carbs'} style={styles.button} backgroundColor={this.props.theme.colors.primary} />
                        <ButtonModel text={'Low Fat'} style={styles.button} backgroundColor={this.props.theme.colors.primary} />
                        <ButtonModel text={'Low Fat'} style={styles.button} backgroundColor={this.props.theme.colors.primary} />
                        <ButtonModel text={'Low Fat'} style={styles.button} backgroundColor={this.props.theme.colors.primary} />
                        <ButtonModel text={'Low Fat'} style={styles.button} backgroundColor={this.props.theme.colors.primary} />
                        <ButtonModel text={'Low Fat'} style={styles.button} backgroundColor={this.props.theme.colors.primary} />
                        <ButtonModel text={'Low Fat'} style={styles.button} backgroundColor={this.props.theme.colors.primary} />
                    </View>
                </ScrollView>

            </View>
        );
    };
}

export default withTheme(Filters);

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
    button: {
        marginHorizontal: 5,
        borderRadius: 10,
        paddingHorizontal: 15
    }
});
