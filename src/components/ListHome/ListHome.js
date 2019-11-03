import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import ListItem from './ListItem'
import TitlePage from "../TitlePage/TitlePage";

class ListHome extends React.Component {
	state = {
		ids: [
			'b79327d05b8e5b838ad6cfd9576b30b6',
			// '6d4439a7df0e7bf009cc761ad6b51012',
			// 'dc1ed9e2cafc516f2e850e26510cfe67',
			// '5e8a91726dd94399e780ea391b895480'
		]
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<TitlePage text={'What could you eat today ?'}/>
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.scrollList}
				>
					<View style={{ flexDirection: 'row' }} onStartShouldSetResponder={() => true}>
						{this.state.ids.map((id) =>
							<ListItem id={id} />
						)}
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
	}
});
