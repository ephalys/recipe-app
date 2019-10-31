import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";

class TitlePage extends React.Component {
    render(){
        return(
            <Text style={styles.titlePage}>{this.props.text}</Text>
        );
    };
}

export default TitlePage;

const styles = StyleSheet.create({

    titlePage: {
        fontSize: 24,
        fontWeight: '700',
        paddingHorizontal: 20
    }
});
