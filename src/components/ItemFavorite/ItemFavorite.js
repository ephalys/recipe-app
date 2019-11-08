import { ListItem, Icon } from 'react-native-elements'
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { SwipeRow } from 'react-native-swipe-list-view';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableWithoutFeedback, Text, Image, TouchableHighlight } from 'react-native';
import { Transition } from "react-navigation-fluid-transitions";

class ItemFavorite extends Component {

    static propTypes = {
        itemID: PropTypes.string.isRequired,
        onDelete: PropTypes.func.isRequired
    };

    state = {
        item: null
    };

    componentDidMount() {
        this.props.recipeServ.getRecipesById(this.props.itemID)
            .then((resp) => {
                data = resp.data[0];
                this.setState({
                    item: {
                        uri: data.uri,
                        label: data.label,
                        image: data.image,
                        url: data.url,
                        yield: data.yield,
                        ingredientLines: data.ingredientLines,
                        totalTime: data.totalTime,
                        id: data.uri.split('_')[1]
                    }
                });
            });
    }

    render() {
        return (
            this.state.item !== null ? (
                <SwipeRow leftOpenValue={0} disableRightSwipe={true} rightOpenValue={-105}>
                    <View style={styles.standaloneRowBack}>
                        <Icon name="ios-trash" size={35} color="#fff" type='ionicon' onPress={() => this.props.onDelete(this.state.item.id)} />
                    </View>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.props.navigation.navigate('RecipePage', {
                                item: this.state.item
                            });
                        }}>
                        <View style={styles.itemContainer}>
                            <Transition shared={this.state.item.id}>
                                <Image style={styles.imageFavorites} source={{ uri: this.state.item.image }} />
                            </Transition>
                            <Text>
                                {this.state.item.label}
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
