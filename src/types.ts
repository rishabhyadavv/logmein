export interface FeedCategory {
	name: string;
	colour: string;
	imageURL: string;
}

export interface Article {
	authors: string;
	title?: string;
	description?: string;
	link?: string;
	published?: string;
	image: string;
	categories?: [];
}

export interface Feed {
	id: string;
	title: string;
}

export type SortMode = "asc" | "desc";
