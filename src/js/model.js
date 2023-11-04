export const entertainmentState = {
	data: [],
	bookmarked: [],
}

export const fetchEntertainmentData = async () => {
	const respone = await fetch('https://entertainment-app-2f41c-default-rtdb.firebaseio.com/DUMMY_DATA.json')
	const data = await respone.json()
	entertainmentState.data = data

}


// export const currentTrendings = () => {
// 	return DUMMY_DATA.filter(data => data.isTrending === true)
// }

// export const remommendedTitles = () => {
// 	return DUMMY_DATA.filter(data => data.isTrending === false)
// }

// export const titlesSearch = searchPhrase => {
// 	return DUMMY_DATA.filter(data => {
// 		const smallTitle = data.title.toLowerCase()
// 		return smallTitle.includes(searchPhrase.trim().toLowerCase())
// 	})
// }

// export const moviesTitles = () => {
// 	return DUMMY_DATA.filter(data => data.category === 'Movie')
// }

// export const tvSeriesTitles = () => {
// 	return DUMMY_DATA.filter(data => data.category === 'TV Series')
// }
