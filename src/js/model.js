import { getJSON, updateDataFirebase } from './helpers'
import { API_URL } from './config'

export const entertainmentState = {
	data: [],
	bookmarked: [],
	trending: [],
	recommended: [],
}

// function responsible for get data from firebase and create  state

export const getEntertainmentData = async () => {
	const data = await getJSON(`${API_URL}DUMMY_DATA.json`)
	entertainmentState.data = data
	entertainmentState.data.forEach((title, id) => (title.id = id))
	sortEntertainmentData(entertainmentState.data)
}

// function responsible for sort state on category

const sortEntertainmentData = entertainmentData => {
	for (const data of entertainmentData) {
		data.isBookmarked ? entertainmentState.bookmarked.push(data) : ''
		data.isTrending ? entertainmentState.trending.push(data) : entertainmentState.recommended.push(data)
	}
}
// function returing trending titles

export const currentTrendings = () => entertainmentState.trending

// function returing recommended titles

export const recommendedTitles = () => entertainmentState.recommended

// function responsible for searching through the titles to find the one the user is looking for 
export const titlesSearch = searchPhrase => {
	return entertainmentState.data.filter(data => {
		const smallTitle = data.title.toLowerCase()
		return smallTitle.includes(searchPhrase.trim().toLowerCase())
	})
}

// function returing movies titles

export const moviesTitles = () => entertainmentState.data.filter(data => data.category === 'Movie')

// function returing TV Series titles

export const tvSeriesTitles = () => entertainmentState.data.filter(data => data.category === 'TV Series')

// function returing bookmarked titles

export const bookmarkedTitles = () => entertainmentState.bookmarked

// function responsible for update bookmark information on firebase

export const updateBookmarkedData = async (cardID, titles) => {
	try {
		// id of the card clicked by the user
		const titleID = cardID
		// all information about the clicked title
		const titleSought = titles.find(title => title.id === Number(titleID))

		// get actual information about clicked ctitle
		const data = await getJSON(`${API_URL}DUMMY_DATA/${titleID}.json`)
		// check actual information about bookmark on firebase
		const isBookmarked = data.isBookmarked === true ? false : true
		// create new information about clicked title, copy all information, change bookmark information
		const updateBookmarkedData = { ...titleSought, isBookmarked: isBookmarked }
		// update information about clicked title on firebase
		updateDataFirebase(updateBookmarkedData, updateBookmarkedData.id)
	} catch (err) {
		console.error(err)
	}
}
