import * as model from './model'
import MoviesView from './Views/MoviesView'
import SearchView from './Views/SearchView'

const moviesController = () => {
	MoviesView.render(model.moviesTitles(), true)
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
	MoviesView.renderSpinner()
	await model.fetchEntertainmentData()
	MoviesView.clearSpinner()
	moviesController()
	searchController()
}

init()
