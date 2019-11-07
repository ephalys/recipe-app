import React from "react";
import {TouchableOpacity, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import {bindActionCreators} from "redux";
import {addAsync, initAsync} from "../../redux/actions/RecipesActions";
import {connect} from "react-redux";

class FavoriteButton extends React.Component {

    onPressAdd(id) {
        console.log(id);
        this.props.actions.addFavorite(id);
    }

    componentDidMount() {
        this.props.actions.initFavorites();
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => this.onPressAdd(this.props.recipeId)}
            >
                <Icon color={this.props.favorites !== null && this.props.favorites.includes(this.props.recipeId) ? ('#86c16f') : ('#fff')} size={35} name={'ios-heart-empty'} />
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

