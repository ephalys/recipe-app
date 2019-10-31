import React from 'react';
import { StyleSheet, ScrollView, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import InputHome from "../components/InputHome/InputHome";
import ListHome from "../components/ListHome/ListHome";

class HomePage extends React.Component {
    render(){
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.homeContainer}>
                    <View>
                        <InputHome/>
                    </View>
                    <View style={styles.listHomeContainer}>
                        <ListHome/>
                    </View>
                    <View>
                        <InputHome/>
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
