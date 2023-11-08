import * as model from './model'
import BookmarkedView from './Views/BookmarkedView'
import SearchView from './Views/SearchView'

const bookmarkedControler = async () => {
	BookmarkedView.renderSpinner()
	// Get entertainment data from firebase
	await model.getEntertainmentData()
	BookmarkedView.clearSpinner()
	// Get bookmarked titles from entertainment data
	const bookmarkedData = model.bookmarkedTitles()
	// Render bookmarked titles
	BookmarkedView.render(bookmarkedData)
	// add handler which is responsible for update bookmarked information on firebase
	BookmarkedView.bookmarkHandler(model.updateBookmarkedData)
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
	BookmarkedView.addHandlerRender(bookmarkedControler)
	SearchView.addHandlerRender(searchControler)
}

init()
