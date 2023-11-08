import * as model from './model'
import MoviesView from './Views/MoviesView'
import SearchView from './Views/SearchView'

const moviesControler = async () => {
	try {
		MoviesView.renderSpinner()
		// Get entertainment data from firebase
		await model.getEntertainmentData()
		MoviesView.clearSpinner()
		// Render movies titles
		MoviesView.render(model.moviesTitles(), true)
		// add handler which is responsible for update bookmarked information on firebase
		MoviesView.bookmarkHandler(model.updateBookmarkedData)
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
	MoviesView.addHandlerRender(moviesControler)
	SearchView.addHandlerRender(searchControler)
}

init()
