import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationEvents } from 'react-navigation';
import AlphaScrollFlatList from 'alpha-scroll-flat-list';
import ItemFavorite from '../components/ItemFavorite/ItemFavorite';
import { initAsync, deleteAsync } from '../redux/actions/RecipesActions';
import { ActivityIndicator } from 'react-native-paper';
import TitlePage from "../components/TitlePage/TitlePage";

class FavoritesPage extends React.Component {

  state = {
    refreshing: false
  };

  refresh() {
    this.setState({ refreshing: true });
    this.props.actions.initFavorites();
    this.setState({ refreshing: false });
  }

  deleteFavorite(recipeName) {
    this.props.actions.deleteFavorite(recipeName);
  }

  keyExtractor(item) {
    return item.item;
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents onDidFocus={() => this.refresh()} />
        <TitlePage text={'Favorites'} />
        {this.props.recipes && this.props.recipes.length > 0 ? (
          <AlphaScrollFlatList
            data={this.props.recipes}
            keyExtractor={this.keyExtractor.bind(this)}
            renderItem={(element) => {
              return (
                <ItemFavorite key={element.item} itemID={element.item} onDelete={(itemID) => this.deleteFavorite(itemID)} />
              );
            }}
          />
        ) : (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Ajouter des favoris pour les retrouver ici</Text>
            </View>
          )}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1
  }
});

const mapStateToProps = (stateStore) => {
  return ({
    recipes: stateStore.recipesReducer.recipes
  });
};

const mapActionsToProps = (payload) => ({
  actions: {
    initFavorites: bindActionCreators(initAsync, payload),
    deleteFavorite: bindActionCreators(deleteAsync, payload),
  }
});

export default connect(mapStateToProps, mapActionsToProps)(FavoritesPage);
