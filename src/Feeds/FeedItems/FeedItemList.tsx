/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { Article } from "../../types";
import FeedItem from "./Feedlayouts/FeedItem";
import EmptyFeed from "./Feedlayouts/EmptyFeed";
import ErrorFeed from "./Feedlayouts/ErrorFeed";

import { FlatList, RefreshControl } from "react-native";

import { fetchFeedList } from "../../RequestUtil";

export default ({ route, navigation }) => {
	const [articles, setArticles] = useState<Article[]>([]);
	const [error, setError] = useState(false);

	const item = route.params.item;

	useEffect(() => {
		getFeed();
		navigation.setOptions({ title: `${item.name}(${articles.length})` });
	}, []);

	useEffect(() => {
		navigation.setOptions({ title: `${item.name}(${articles.length})` });
	}, [articles]);

	function getFeed() {
		fetchFeedList(item.url).then(items => {
			setArticles(items);
		});
	}

	// Called onEndReached
	function loadVisibleArticle() {
		// TODO: implement visible article with offset
	}

	const renderItem = ({ item }) => {
		return <FeedItem item={item} />;
	};

	const renderEmpty = () => {
		return <EmptyFeed emptyText="No articles today!" />;
	};

	if (error) {
		return <ErrorFeed errorText="Failed to load feed." />;
	}

	return (
		<View style={{ flex: 1, height: Dimensions.get("screen").height }}>
			<FlatList
				data={articles}
				keyExtractor={(_, index) => index.toString()}
				renderItem={renderItem}
				onEndReached={loadVisibleArticle}
				onEndReachedThreshold={0.5}
				ListEmptyComponent={renderEmpty}
				refreshControl={
					<RefreshControl
						onRefresh={() => {
							// TODO : implement refresh
						}}
						refreshing={false}
					/>
				}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};
