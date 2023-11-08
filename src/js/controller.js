import * as model from './model'
import TrendingsView from './Views/TrendingsView'
import RecommendedView from './Views/RecommendedView'
import SearchView from './Views/SearchView'
import Spinner from './Views/Spinner'

const trendingsControler = () => {
	const currentTrendings = model.currentTrendings()
	// Render trendings titles
	TrendingsView.render(currentTrendings)
	// add draggable slider on trending cards container
	TrendingsView.draggableSlider()
	// add handler which is responsible for update bookmarked information on firebase
	TrendingsView.bookmarkHandler(model.updateBookmarkedData)
}

const recommendedControler = () => {
	const currentRecommended = model.recommendedTitles()
	// Render recommended titles
	RecommendedView.render(currentRecommended, true)
	// add handler which is responsible for update bookmarked information on firebase
	RecommendedView.bookmarkHandler(model.updateBookmarkedData)
}

const searchControler = () => {
	// Function responsible for finding the searched titles. Takes as parameter the data entered by the user in the input
	const searchPhraseTitles = searchPhrase => {
		const availableTitles = model.titlesSearch(searchPhrase)
		const numberOfTitles = availableTitles.length
		// Displaying information on how many titles have been found for a given phrase
		SearchView.showSearchInfo(numberOfTitles, searchPhrase)
		// Displaying searched titles
		SearchView.render(availableTitles)
	}
	// add handler on search input
	SearchView.searchEventHandler(searchPhraseTitles)
}

const init = async () => {
	Spinner.renderSpinner()
	// Get entertainment data from firebase
	await model.getEntertainmentData()
	Spinner.clearSpinner()
	TrendingsView.addHandlerRender(trendingsControler)
	RecommendedView.addHandlerRender(recommendedControler)
	SearchView.addHandlerRender(searchControler)
}

init()
