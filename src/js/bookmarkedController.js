import * as model from './model'
import BookmarkedView from './Views/BookmarkedView'
import SearchView from './Views/SearchView'

const bookmarkedController = () => {
	const bookmarkedData = model.bookmarkedTitles()
	BookmarkedView.render(bookmarkedData)
}

const searchController = () => {
	const searchPhraseTitles = searchPhrase => {
		const availableTitles = model.titlesSearch(searchPhrase)
		const numberOfTitles = availableTitles.length
		SearchView.showSearchInfo(numberOfTitles, searchPhrase)
		SearchView.render(availableTitles)
	}

	SearchView.searchEventHandler(searchPhraseTitles)
}

const init = async () => {
	BookmarkedView.renderSpinner()
	await model.fetchEntertainmentData()
	BookmarkedView.clearSpinner()
	bookmarkedController()
	BookmarkedView.bookmarkedHandler()
	searchController()
}

init()
