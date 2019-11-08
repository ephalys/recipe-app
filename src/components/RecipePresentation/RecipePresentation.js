import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { Transition } from 'react-navigation-fluid-transitions';
import Dictation from "../Voice/VoiceParameters";
import { withNavigation } from 'react-navigation';

class RecipePresentation extends React.Component {

    render() {
        return (
            <View style={styles.containerPresentation}>
                <Transition shared={this.props.item.id}>
                    <ImageBackground style={styles.imageRecipe} source={{ uri: this.props.item.image }}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Transition appear="top">
                                <View style={styles.buttonsTopLeft}>
                                    <Icon size={35} name={'ios-arrow-back'} style={{ paddingHorizontal: 20}} color={'white'} onPress={() => { this.props.navigation.goBack() }} />
                                </View>
                            </Transition>
                            <Transition appear="top">
                                <View style={styles.buttonsTopRight}>
                                    <Dictation text="Hello" />
                                    <FavoriteButton recipeId={this.props.item.id} />
                                </View>
                            </Transition>
                        </View>
                        <Text style={styles.titleRecipe}>{this.props.item.label}</Text>
                    </ImageBackground>
                </Transition>
                <View style={styles.presentation}>
                    <View style={styles.sousPresentation}>
                        <Transition appear="horizontal">
                            <Text style={styles.textMainPresentation}>Servings</Text>
                        </Transition>

                        <Transition appear="horizontal">
                            <Text style={styles.textDescriptionPresentation}>{this.props.item.yield}</Text>
                        </Transition>
                    </View>
                    <View style={styles.sousPresentation}>
                        <Transition appear="horizontal">
                            <Text style={styles.textMainPresentation}>Cooking Time</Text>
                        </Transition>

                        <Transition appear="horizontal">
                            <Text style={styles.textDescriptionPresentation}>{this.props.item.totalTime >= 60 && (`${parseInt(this.props.item.totalTime / 60)} hr `)}{this.props.item.totalTime % 60} min</Text>
                        </Transition>
                    </View>
                </View>
            </View >
        );
    };
}

export default withNavigation(RecipePresentation);

const styles = StyleSheet.create({
    containerPresentation: {
        flex: 1,
    },
    blocPresentation: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageRecipe: {
        justifyContent: 'space-between',
        height: 400
    },
    titleRecipe: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 40,
        padding: 15,
        textShadowColor: 'rgba(0, 0, 0, 0.05)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 3,
    },
    presentation: {
        paddingVertical: 10,
        marginHorizontal: 20,
        marginTop: 10,
        flexDirection: 'row'
    },
    sousPresentation: {
        flex: 1
    },
    textMainPresentation: {
        fontWeight: 'bold',
        fontSize: 20
    },
    textDescriptionPresentation: {
        fontSize: 16,
        marginTop: 5
    },
    buttonsTopLeft: {
        flexDirection: 'row',
        top: 20,
        left: 0
    },
    buttonsTopRight: {
        flexDirection: 'row',
        top: 20,
        right: 20,
    }
});
