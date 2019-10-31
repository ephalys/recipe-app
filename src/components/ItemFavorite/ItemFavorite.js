import { ListItem } from 'react-native-elements'
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { SwipeRow } from 'react-native-swipe-list-view';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, StyleSheet, Button } from 'react-native';

class ItemFavorite extends Component {

    static propTypes = {
        itemID: PropTypes.string.isRequired,
        onDelete: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.recipeServ.getRecipes(this.props.itemID).then((resp) => {
            console.log('data', resp.data);
            this.setState({ recipes: resp.data });
        });
    }

    state = {
        recipes: null
    };

    render() {
        return (
            this.state.recipes !== null ? (
                <SwipeRow leftOpenValue={0} rightOpenValue={-75} key={this.props.key}>
                    <View style={styles.standaloneRowBack}>
                        <Button title="Suppr." onPress={() => this.props.onDelete(this.props.city)} />
                    </View>
                    <View style={styles.itemContainer}>
                        <ListItem
                            title={this.state.recipes.label}
                            leftAvatar={{ height: 80, width: 80, source: { uri: this.state.recipes.image } }}
                            bottomDivider
                            title={'Oui'}
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
