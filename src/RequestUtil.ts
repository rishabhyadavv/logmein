import * as rssParser from "react-native-rss-parser";
import parse from "./parseFeed";

export async function fetchFeedList(url) {
	return fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/xml"
		}
	})
		.then(response => response.text())
		.then(async responseData => {
			const rss = await rssParser.parse(responseData);
			let items = rss.items;

			// let v = 0
			let articles = await parse(items, [], "asc");
			return articles;
			// console.log(v);
		})
		.catch(error => {
			throw error;
			console.log("error is", error);
		});
}
