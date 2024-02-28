export type Excerpt = {
	text: string;
	track?: string;
	image?: string;
};

export type Chapter = {
	title?: Excerpt;
	lines: Excerpt[];
};

export type BookMeta = {
	id: string;
	title: {
		text: string;
	};
	author: {
		id: string;
		text: string;
	};
	publishDate: string;
};

export type Book = {
	meta: BookMeta;
	chapters: {
		title?: Excerpt;
		paragraphs: Excerpt[][];
	}[];
};

export type ParsedBook = Array<
	Excerpt & {
		id: string;
		type?: 'title' | 'chapter-title' | null;
		meta?: { chapter: number; paragraph: number; line: number; total: number };
	}
>;

export type Storyy = {
	type?: 'title';
	text: string;
	track?: string;
}[];
