import { ListItem, Icon } from 'react-native-elements'
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { SwipeRow } from 'react-native-swipe-list-view';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import {View, StyleSheet, TouchableWithoutFeedback, Text, Image, TouchableHighlight} from 'react-native';
import {Transition} from "react-navigation-fluid-transitions";

class ItemFavorite extends Component {

    static propTypes = {
        itemID: PropTypes.string.isRequired,
        onDelete: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.recipeServ.getRecipes(this.props.itemID).then((resp) => {
            this.setState({ OneRecipe: resp.data });
        });
    }

    state = {
        OneRecipe: null
    };

    render() {
        return (
            this.state.OneRecipe !== null ? (
                <SwipeRow leftOpenValue={0} disableRightSwipe={true} rightOpenValue={-105}>
                    <View style={styles.standaloneRowBack}>
                        <Icon name="ios-trash" size={35} color="#fff" type='ionicon' onPress={() => this.props.onDelete(this.props.city)} />
                    </View>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.props.navigation.navigate('RecipePage', {
                                recipeId: this.props.itemID
                            });
                        }}>
                        <View style={styles.itemContainer}>
                            <Transition shared="recipeImage">
                                <Image style={styles.imageFavorites} source={{uri: this.state.OneRecipe[0].image }}/>
                            </Transition>
                            <Text>
                                {this.state.OneRecipe[0].label}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </SwipeRow>
            ) : (
                <ActivityIndicator />
            )
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        color: "#000",
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#e9e9e9'
    },
    standaloneRowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 15,
        color: '#fff',
        backgroundColor: 'red',
        paddingRight: 37,
        height: 100
    },
    imageFavorites: {
        width: 80,
        height: 80,
        borderRadius: 40,
        overflow: "hidden",
        marginRight: 20
    }
});

const mapStateToProps = (stateStore) => ({
    recipeServ: stateStore.serviceReducer.recipeService
});

export default withNavigation(connect(mapStateToProps)(ItemFavorite));
