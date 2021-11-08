import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Feeds } from "../Feeds/Feeds";
import FeedItems from "../Feeds/FeedItems/FeedItemList";
import { FeedBrowser } from "../Feeds/FeedBrowser/FeedBrowser";

//Add any modal stacks here
export default function RootStackNavigator() {
	const RootStack = createStackNavigator();

	return (
		<RootStack.Navigator>
			<RootStack.Screen name="Feeds" component={Feeds} options={{ headerShown: false }} />
			<RootStack.Screen name="FeedItemList" component={FeedItems} />
			<RootStack.Screen name="FeedBrowser" component={FeedBrowser} />
		</RootStack.Navigator>
	);
}
