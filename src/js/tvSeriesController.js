import * as model from './model'
import TvSeriesView from './Views/TvSeriesView'
import SearchView from './Views/SearchView'

const tvSeriesControler = async () => {
	try {
		TvSeriesView.renderSpinner()
		// Get entertainment data from firebase
		await model.getEntertainmentData()
		TvSeriesView.clearSpinner()
		// Render TV Series titles
		TvSeriesView.render(model.tvSeriesTitles(), true)
		// add handler which is responsible for update bookmarked information on firebase
		TvSeriesView.bookmarkHandler(model.updateBookmarkedData)
	} catch (err) {
		console.error(err)
	}
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

const init = () => {
	TvSeriesView.addHandlerRender(tvSeriesControler)
	SearchView.addHandlerRender(searchControler)
}

init()
