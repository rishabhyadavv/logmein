import React from "react";
import { StyleSheet, Text } from "react-native";

interface EmptyLayoutProps {
	emptyText: string;
}

export default function EmptyFeed({ emptyText }: EmptyLayoutProps) {
	return <Text style={[styles.empty_text]}>{emptyText}</Text>;
}

const styles = StyleSheet.create({
	empty_text: {
		fontSize: 16,
		marginTop: 16,
		marginLeft: 8,
		fontWeight: "500"
	}
});
