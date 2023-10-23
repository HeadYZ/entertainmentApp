import * as model from './model'
import TrendingsView from './Views/TrendingsView'
import RecommendedView from './Views/RecommendedView'
import SearchView from './Views/SearchView'

const trendingsController = () => {
	const currentTrendings = model.currentTrendings()
	for (const trendingTitle of currentTrendings) {
		TrendingsView.render(trendingTitle)
	}
	TrendingsView.draggableSlider()
}

const recommendedController = () => {
	const currentRecommended = model.remommendedTitles()
	for (const recommendedTitle of currentRecommended) {
		RecommendedView.render(recommendedTitle)
	}
}

const searchController = () => {
	const searchPhraseTitles = searchPhrase => {
		const availableTitles = model.titlesSearch(searchPhrase)
		for (const searchTerm of availableTitles) {
			SearchView.render(searchTerm)
		}
	}

	SearchView.searchEventHandler(searchPhraseTitles)
}

const init = () => {
	trendingsController()
	recommendedController()
	searchController()
}

init()
