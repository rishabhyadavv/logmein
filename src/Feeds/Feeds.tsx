import React from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
const FEED_CATEGORIES = [
	{
		name: "Sport",
		url: "http://www.sportingnews.com/us/rss"
	},

	{
		name: "News",
		url: "https://www.buzzfeed.com/world.xml"
	},

	{
		name: "Health",
		url: "https://blog.myfitnesspal.com/feed/"
	},

	{
		name: "Technology",
		url: "https://www.technologyreview.com/feed/"
	}
];
import { useNavigation } from "@react-navigation/core";

export function Feeds() {
	const categories = FEED_CATEGORIES;
	const navigation = useNavigation();

	const renderCategoryItem = ({ item }) => {
		console.log(item.name);
		return (
			<TouchableOpacity style={{ paddingTop: 8 }} onPress={() => navigation.navigate("FeedItemList", { item: item })}>
				<View style={{ height: 80, width: "100%", backgroundColor: "gray", alignItems: "center", justifyContent: "center" }}>
					<Text style={{ color: "black", fontSize: 30, margin: "auto" }}>{item.name}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View style={{ flex: 1 }}>
			<FlatList key={2} data={categories} bounces={false} renderItem={renderCategoryItem} keyExtractor={(_, index) => index.toString()} />
		</View>
	);
}
