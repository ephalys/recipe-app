import React from "react";
import { StyleSheet, Text, ImageBackground, TouchableHighlight, View } from "react-native";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { Transition } from "react-navigation-fluid-transitions";

class ListItem extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.listItem}
                onPress={() => {
                    this.props.navigation.navigate('RecipePage', {
                        recipeId: this.props.item.recipe.uri.split('_')[1]
                    });
                }}
            >
                <Transition shared="recipeImage">
                    <ImageBackground source={{ uri: this.props.item.recipe.image }} style={styles.imageContainer}>
                        <View style={styles.buttonsTop}>
                            <FavoriteButton recipeId={this.props.item.recipe.uri.split('_')[1]} />
                        </View>
                        <Text style={styles.titleRecipe}>
                            {this.props.item.recipe.label}
                        </Text>
                    </ImageBackground>
                </Transition>
            </TouchableHighlight>
        )
    }
}

export default ListItem;

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
        right: 20
    }
});
