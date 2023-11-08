import { getJSON, updateDataFirebase } from './helpers'
import { API_URL } from './config'

export const entertainmentState = {
	data: [],
	bookmarked: [],
	trending: [],
	recommended: [],
}

export const getEntertainmentData = async () => {
	const data = await getJSON(`${API_URL}DUMMY_DATA.json`)
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

export const updateBookmarkedData = async (cardID, titles) => {
	try {
		const titleID = cardID
		const titleSought = titles.find(title => title.id === Number(titleID))

		const data = await getJSON(`${API_URL}DUMMY_DATA/${titleID}.json`)
		const isBookmarked = data.isBookmarked === true ? false : true
		const updateBookmarkedData = { ...titleSought, isBookmarked: isBookmarked }
		updateDataFirebase(updateBookmarkedData, updateBookmarkedData.id)
	} catch (err) {
		console.error(err)
	}
}
