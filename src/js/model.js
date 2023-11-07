import {db} from './firebase'

export const entertainmentState = {
	data: [],
	bookmarked: [],
	trending: [],
	recommended: [],
}

export const fetchEntertainmentData = async () => {
	const respone = await fetch('https://entertainment-app-2f41c-default-rtdb.firebaseio.com/DUMMY_DATA.json')
	const data = await respone.json()
	entertainmentState.data = data
	entertainmentState.data.forEach((title, id) => (title.id = id))
	sortEntertainmentData(entertainmentState.data)
}

const sortEntertainmentData = entertainmentData => {
	for (const data of entertainmentData) {
		data.isBookmarked ? entertainmentState.bookmarked.push(data) : ''
		data.isTrending ? entertainmentState.trending.push(data) : entertainmentState.recommended.push(data)
	}
}

export const currentTrendings = () => entertainmentState.trending

export const recommendedTitles = () => entertainmentState.recommended

export const titlesSearch = searchPhrase => {
	return entertainmentState.data.filter(data => {
		const smallTitle = data.title.toLowerCase()
		return smallTitle.includes(searchPhrase.trim().toLowerCase())
	})
}

export const moviesTitles = () => entertainmentState.data.filter(data => data.category === 'Movie')

export const tvSeriesTitles = () => entertainmentState.data.filter(data => data.category === 'TV Series')

export const bookmarkedTitles = () => entertainmentState.bookmarked

export const toggleBookmarkedTitle = target => {
	console.log(target)
}

export const updateDataFirebase = () => {
	update(ref(db, 'DUMMY_DATA/0'), {
		title: 'Beyond Earth',
		thumbnail: {
			trending: {
				small: './thumbnails/beyond-earth/trending/small.jpg',
				large: './thumbnails/beyond-earth/trending/large.jpg',
			},
			regular: {
				small: './thumbnails/beyond-earth/regular/small.jpg',
				medium: './thumbnails/beyond-earth/regular/medium.jpg',
				large: './thumbnails/beyond-earth/regular/large.jpg',
			},
		},
		year: 2019,
		category: 'Movie',
		rating: 'PG',
		isBookmarked: false,
		isTrending: false,
	})
}
