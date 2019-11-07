import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomePage from '../pages/HomePage';
import ExplorePage from '../pages/ExplorePage';
import Icon from 'react-native-vector-icons/Ionicons';
import FavoritesPage from '../pages/FavoritesPage';
import RecipePage from '../pages/RecipePage';
import { createStackNavigator } from 'react-navigation-stack';

const homeNavigator = createStackNavigator(
    {
        Home: {
          screen: HomePage
        },
        RecipePage: {
            screen: RecipePage
        }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerTransparent: true,
            height: 20,
            headerTintColor: '#000',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }
);


const tabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: homeNavigator,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} size={25} name={'ios-list'} />
                )
            }
        },
        Favorites: {
            // screen: favoritesNavigator,
            screen: FavoritesPage,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} size={25} name={'ios-heart-empty'} />
                )
            }
        },
        Explore: {
            screen: ExplorePage,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} size={25} name={'ios-search'} />
                )
            }
        },
        Recipe: {
            screen: RecipePage,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} size={25} name={'ios-settings'} />
                )
            }
        }
    },
    {
        initialRouteName: 'Home',
        activeColor: "#86c16f",
        inactiveColor: "#000",
        labeled: false,
        barStyle: {
            backgroundColor: "#fff",
            labelStyle: {
                textAlign: "center"
            }
        }
    }
);

export default tabNavigator;
