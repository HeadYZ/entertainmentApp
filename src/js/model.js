import data from '../../data.json'

const DUMMY_DATA = JSON.parse(JSON.stringify(data))

export const currentTrendings = () => {
	return DUMMY_DATA.filter(data => data.isTrending === true)
}

export const remommendedTitles = () => {
	return DUMMY_DATA.filter(data => data.isTrending === false)
}

export const titlesSearch = searchPhrase => {
	return DUMMY_DATA.filter(data => {
		const smallTitle = data.title.toLowerCase()
		return smallTitle.includes(searchPhrase.trim().toLowerCase())
	})
}

export const moviesTitles = () => {
	return DUMMY_DATA.filter(data => data.category === 'Movie')
}

export const tvSeriesTitles = () => {
	return DUMMY_DATA.filter(data => data.category === 'TV Series')
}
