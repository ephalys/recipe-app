import React from "react";
import { StyleSheet, Text, ImageBackground, TouchableHighlight, View } from "react-native";
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { Transition } from "react-navigation-fluid-transitions";
import LoadingView from '../LoadingView/LoadingView';

class ListItem extends React.Component {
    state = {
        datas: null
    };

    componentDidMount() {
        this.props.recipeServ.getRecipesById(this.props.recipeId)
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
            this.state.datas !== null ? (
                <TouchableHighlight
                    style={styles.listItem}
                    onPress={() => {
                        this.props.navigation.navigate('RecipePage', {
                            recipeId: this.props.recipeId
                        });
                    }}>
                    <Transition shared="recipeImage">
                        <ImageBackground
                            source={{ uri: this.state.datas.image }}
                            style={styles.imageContainer}
                        >
                            <View style={styles.buttonsTop}>
                                <FavoriteButton recipeId={this.props.recipeId} />
                            </View>
                            <Text style={styles.titleRecipe}>
                                {this.state.datas.label}
                            </Text>
                        </ImageBackground>
                    </Transition>
                </TouchableHighlight>
            ) : (
                <LoadingView />
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
    },
    buttonsTop: {
        position: 'absolute',
        flexDirection: 'row',
        top: 20,
        left: 0
    }
});
