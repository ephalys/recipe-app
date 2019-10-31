import { ListItem } from 'react-native-elements'
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
            this.setState({ recipes: resp });
        });
    }

    state = {
        recipes: null
    }

    render() {
        console.log(this.props);
        //console.log(this.state.recipes);
        return (
            this.state.recipes !== null ? (
            <SwipeRow leftOpenValue={0} rightOpenValue={-75} key={this.props.itemID}>
                <View style={styles.itemContainer}>
                        <ListItem
                            title={this.state.recipes.label}
                            //leftAvatar={{ source: { uri: this.state.recipes.avatar_url } }}
                            bottomDivider
                        />
                </View>
            </SwipeRow>
            ) : (<ActivityIndicator />)
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {

    }
});

const mapStateToProps = (stateStore) => ({
    recipeServ: stateStore.serviceReducer.recipeService
});

export default connect(mapStateToProps)(ItemFavorite);