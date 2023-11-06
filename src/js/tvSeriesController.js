import * as model from './model'
import TvSeriesView from './Views/TvSeriesView'
import SearchView from './Views/SearchView'

const tvSeriesController = () => {
	TvSeriesView.render(model.tvSeriesTitles(), true)
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
	TvSeriesView.renderSpinner()
	await model.fetchEntertainmentData()
	TvSeriesView.clearSpinner()
	tvSeriesController()
	searchController()
}

init()
