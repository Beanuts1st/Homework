

export type ExternalUrls ={
	spotify: string;
}

export type Artist = {
	name: string;
}
export type Image = {
	height: number;
	url: string;
	width: number;
}
export type Album ={
	album_type: string;
	artists: Artist[];
	images: Image[];
	name: string;
}
export type ExternalIds ={
	isrc: string;
}

export type Item = {
	album: Album;
	artists: Artist[];
	id: string;
    uri: string;
}
export type selectedTrack = {
	selected: string;
}