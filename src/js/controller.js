import * as model from './model'
import TrendingsView from './Views/TrendingsView'
import RecommendedView from './Views/RecommendedView'
import SearchView from './Views/SearchView'

const trendingsController = () => {
	const currentTrendings = model.currentTrendings()
	TrendingsView.render(currentTrendings)
	TrendingsView.draggableSlider()
}

const recommendedController = () => {
	const currentRecommended = model.recommendedTitles()

	RecommendedView.render(currentRecommended, true)
}

const searchController = () => {
	const searchPhraseTitles = searchPhrase => {
		const availableTitles = model.titlesSearch(searchPhrase)
		const numberOfTitles = availableTitles.length
		SearchView.showSearchInfo(numberOfTitles, searchPhrase)

		for (const searchTerm of availableTitles) {
			SearchView.render(searchTerm)
		}
	}

	SearchView.searchEventHandler(searchPhraseTitles)
}

const init = async () => {
	await model.fetchEntertainmentData()
	trendingsController()
	recommendedController()
	searchController()
}

init()
