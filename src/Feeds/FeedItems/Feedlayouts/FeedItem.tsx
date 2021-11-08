import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Article } from "../../../types";
import { useNavigation } from "@react-navigation/core";

interface ArticleItemProps {
	item: Article;
}

export default function ArticleItem({ item }: ArticleItemProps) {
	const navigation = useNavigation();

	const handleLink = async () => {
		if (item.link && item.link) {
			navigation.navigate("FeedBrowser", { item: item });
		}
	};

	return (
		<TouchableOpacity onPress={handleLink} style={styles.container}>
			<View style={styles.text_container}>
				<View style={styles.row}>
					<Text style={[styles.title, { width: "80%" }]} numberOfLines={2}>
						{item.title}
					</Text>
					<Text style={[styles.title]}>{item.published}</Text>
				</View>

				{item.description && item.description !== "null" && (
					<Text style={[styles.description]} numberOfLines={2}>
						{item.description.trim()}
					</Text>
				)}
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 16,
		marginBottom: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start"
	},

	text_container: {
		flex: 1,
		marginRight: 12
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between"
	},

	title: {
		fontWeight: "bold",
		fontSize: 16,
		marginBottom: 4
	},

	description: {
		fontSize: 14,
		marginBottom: 8
	}
});
