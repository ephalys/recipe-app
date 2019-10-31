import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';

const recipeTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#86c16f',
        accent: '#f1c40f',
        background: '#fff'
    },
};

export default function App() {
    return (
        <PaperProvider theme={recipeTheme}>
            <SafeAreaView style={styles.container}>
                <AppNavigator/>
            </SafeAreaView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
