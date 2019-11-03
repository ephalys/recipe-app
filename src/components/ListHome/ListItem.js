import React from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { addAsync } from '../../redux/actions/RecipesActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ListItem extends React.Component {
  state = {
    datas: []
  };

  onPressAdd(id) {
    this.props.actions.addFavorite(id);
  }

  componentDidMount() {
    let tab = [];
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
    return (
      this.state.datas !== [] && (
      <View key={this.props.id} style={styles.listItem}>
        <ImageBackground
          source={{ uri: this.state.datas.image }}
          style={styles.imageContainer}
        >
          <TouchableOpacity style={styles.iconFavorites}>
            <Icon color={'#fff'} size={35} name={'ios-heart'} onPress={() => this.onPressAdd(this.props.id)} />
          </TouchableOpacity>
          <Text style={styles.titleRecipe}>{this.state.datas.label}</Text>
        </ImageBackground>
      </View>
      )
    )
  }
}

const mapStateToProps = (stateStore) => ({
  recipeServ: stateStore.serviceReducer.recipeService
});

const mapActionsToProps = (payload) => ({
  actions: {
    addFavorite: bindActionCreators(addAsync, payload)
  }
});

export default connect(mapStateToProps, mapActionsToProps)(ListItem);

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
  },
  iconFavorites: {
    position: 'absolute',
    top: 20,
    left: 20,
  }
});
