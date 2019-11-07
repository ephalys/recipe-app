import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import InputHome from "../components/InputHome/InputHome";
import ListHome from "../components/ListHome/ListHome";
import Filters from '../components/Filters/Filters'
import { NavigationEvents } from 'react-navigation';

class HomePage extends React.Component {

    render(){
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.homeContainer}>
                    <NavigationEvents
                        onDidFocus={() => console.log('navEvent')}
                    />
                    <View>
                        <InputHome/>
                    </View>
                    <View style={styles.listHomeContainer}>
                        <ListHome/>
                    </View>
                    <View>
                        <Filters/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    };
}

export default HomePage;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
    },
    listHomeContainer: {
        flexGrow: 1,
    },
});
