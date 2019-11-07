import React from "react";
import { StyleSheet, Text, ImageBackground, TouchableHighlight } from "react-native";
import { initAsync, addAsync } from '../../redux/actions/RecipesActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import FavoriteButton from "../FavoriteButton/FavoriteButton";


class ListItem extends React.Component {
  state = {
    datas: []
  };

  onPressAdd(id) {
    this.props.actions.addFavorite(id);
  }

  componentDidMount() {
    this.props.recipeServ.getRecipesById(this.props.id)
        .then((datas) => {
          this.setState({
            datas: datas.data[0]
          });
        })
        .catch((err) => {
          alert(err);
        });
  }

  render() {
    console.log(this.props);
    return (
        this.state.datas !== [] && (
            <TouchableHighlight
                style={styles.listItem}
                onPress={() => {
                  console.log('press')
                  this.props.navigation.navigate('RecipePage', {
                    itemId: 86,
                    otherParam: 'anything you want here',
                  });
                }}>
              <ImageBackground
                  source={{ uri: this.state.datas.image }}
                  style={styles.imageContainer}
              >
                <FavoriteButton position={'left'}/>
                <Text
                    style={styles.titleRecipe}
                >
                  {this.state.datas.label}
                </Text>
              </ImageBackground>
            </TouchableHighlight>
        )
    )
  }
}

const mapStateToProps = (stateStore) => ({
  recipeServ: stateStore.serviceReducer.recipeService,
});

export default withNavigation(connect(mapStateToProps)(ListItem));

const styles = StyleSheet.create({
  listItem: {
    height: '100%',
    width: 280,
    marginLeft: 20,
    borderRadius: 20,
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
  imageContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'flex-end',
    overflow: 'hidden'
  },
  titleRecipe: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 40,
    padding: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.10)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  }
});
