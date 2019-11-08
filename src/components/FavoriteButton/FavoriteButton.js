import React from "react";
import { TouchableOpacity, StyleSheet, Vibration } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { bindActionCreators } from "redux";
import { addAsync, initAsync } from "../../redux/actions/RecipesActions";
import { connect } from "react-redux";
import * as Haptics from 'expo-haptics';

class FavoriteButton extends React.Component {

    onPressAdd(id) {
        Haptics.selectionAsync()
        this.props.actions.addFavorite(id);
    }

    componentDidMount() {
        this.props.actions.initFavorites();
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => this.onPressAdd(this.props.recipeId)}
                style={styles.buttonContainer}
            >
                <Icon color={this.props.favorites !== null && this.props.favorites.includes(this.props.recipeId) ? ('#86c16f') : ('#fff')} size={35} name={'ios-heart'} style={styles.iconFavorite}/>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = (stateStore) => ({
    favorites: stateStore.recipesReducer.recipes
});

const mapActionsToProps = (payload) => ({
    actions: {
        initFavorites: bindActionCreators(initAsync, payload),
        addFavorite: bindActionCreators(addAsync, payload)
    }
});

export default connect(mapStateToProps, mapActionsToProps)(FavoriteButton);

const styles = StyleSheet.create({
    buttonContainer: {
        marginLeft: 20,
    },
    iconFavorite: {
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 5,
        // iOS
        shadowOffset: {
            width: 0,            // These can't both be 0
            height: 1,           // i.e. the shadow has to be offset in some way
        },
    }
});
