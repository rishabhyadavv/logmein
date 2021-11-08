import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ErrorLayoutProps {
	errorText: string;
}

export default function ErrorFeed({ errorText }: ErrorLayoutProps) {
	return (
		<View style={styles.alt_container}>
			<Text style={[styles.error_text]}>{errorText}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	alt_container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},

	error_text: {
		fontSize: 16,
		fontWeight: "500",
		marginBottom: 24
	}
});
