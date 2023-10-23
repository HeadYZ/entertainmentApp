import data from '../../data.json'

export const currentTrendings = () => {
	return data.filter(data => data.isTrending === true)
}

export const remommendedTitles = () => {
	return data.filter(data => data.isTrending === false)
}

export const titlesSearch = searchPhrase => {
	return data.filter(data => {
		const smallTitle = data.title.toLowerCase()
		return smallTitle.includes(searchPhrase.trim().toLowerCase())
	})
}
