import { ListItem, Icon } from 'react-native-elements'
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { SwipeRow } from 'react-native-swipe-list-view';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

class ItemFavorite extends Component {

    static propTypes = {
        itemID: PropTypes.string.isRequired,
        onDelete: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.recipeServ.getRecipes(this.props.itemID).then((resp) => {
            this.setState({ OneRecipe: resp.data });
        });
    }

    state = {
        OneRecipe: null
    }

    render() {
        return (
            this.state.OneRecipe !== null ? (
                <SwipeRow leftOpenValue={0} disableRightSwipe={true} rightOpenValue={-75} key={this.props.itemID}>
                    <View style={styles.standaloneRowBack}>
                        <Icon name="ios-trash" size={40} color="red" type='ionicon' onPress={() => this.props.onDelete(this.props.city)} />
                    </View>
                    <View style={styles.itemContainer}>
                        <ListItem
                            title={this.state.OneRecipe[0].label}
                            leftAvatar={{ size: "large", source: { uri: this.state.OneRecipe[0].image } }}
                            bottomDivider
                        />
                    </View>
                </SwipeRow>
            ) : (
                    <ActivityIndicator />
                )
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        /*justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 80,*/
        color: "#000",
        marginRight: 25
    },
    standaloneRowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 15,
        color: '#fff',
        marginRight: 25
    },
});

const mapStateToProps = (stateStore) => ({
    recipeServ: stateStore.serviceReducer.recipeService
});

export default connect(mapStateToProps)(ItemFavorite);
