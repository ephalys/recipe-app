import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomePage from '../pages/HomePage';
import ExplorePage from '../pages/ExplorePage';
import Icon from 'react-native-vector-icons/Ionicons';
import FavoritesPage from '../pages/FavoritesPage';
import RecipePage from '../pages/RecipePage';

// import { createStackNavigator } from 'react-navigation-stack';

// const favoritesNavigator = createStackNavigator(
//   {
//     Favorites: {
//       screen: FavoritesPage
//     },
//     AddFavorites: {
//       screen: AddFavoritesPage
//     }
//   },
//   {
//     initialRouteName: 'Favorites',
//     defaultNavigationOptions: {
//       headerStyle: {
//         borderBottomWidth: 0
//       },
//       headerTintColor: '#ffffff',
//       headerTransparent: true,
//       headerTintStyle: {
//         fontWeight: 'bold',
//       }
//     }
//   }
// );

const tabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        tabBarLabel: "Accueil",
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={'ios-home'} />
        )
      }
    },
    Favoris: {
      // screen: favoritesNavigator,
      screen: FavoritesPage,
      navigationOptions: {
        tabBarLabel: "Favoris",
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={'ios-star'} />
        )
      }
    },
    Explore: {
      screen: ExplorePage,
      navigationOptions: {
        tabBarLabel: "Explorer",
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={'ios-settings'} />
        )
      }
    },
    Recipe: {
      screen: RecipePage,
      navigationOptions: {
        tabBarLabel: "Recette",
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={'ios-settings'} />
        )
      }
    }
  },
  {
    initialRouteName: 'Home',
    activeColor: "#009be3",
    inactiveColor: "#000",
    barStyle: {
      backgroundColor: "#fff",
      labelStyle: {
        textAlign: "center"
      }
    }
  }
);

export default tabNavigator;