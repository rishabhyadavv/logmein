import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { WebView } from "react-native-webview";

export function FeedBrowser({ route, navigation }) {
	const params = route.params;
	return (
		<View style={styles.container}>
			<Text>{params.item.name}</Text>
			<WebView source={{ uri: params.item.link[0].url }} style={{ marginTop: 20 }} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 8,
		paddingHorizontal: 16,
		flex: 1
	}
});
