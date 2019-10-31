import React from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import ListItem from './ListItem'

class ListHome extends React.Component {
    render(){
        return(
            <View style={{ flex: 1}}>
                <Text style={styles.titleHome}>
                    What could you eat today ?
                </Text>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollList}
                >
                    <View style={{flexDirection: 'row'}} onStartShouldSetResponder = {() => true}>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                    </View>
                </ScrollView>
            </View>
        );
    };
}

export default ListHome;

const styles = StyleSheet.create({
    scrollList: {
        alignItems: 'center',
        paddingVertical: 20
    },
    titleHome: {
        fontSize: 24,
        fontWeight: '700',
        paddingHorizontal: 20
    }
});
