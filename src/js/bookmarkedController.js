import * as model from './model'
import BookmarkedView from './Views/BookmarkedView'

const bookmarkedController = () => {
	const bookmarkedData = model.bookmarkedTitles()
	BookmarkedView.render(bookmarkedData)
}

const init = async () => {
	BookmarkedView.renderSpinner()
	await model.fetchEntertainmentData()
	BookmarkedView.clearSpinner()
	bookmarkedController()
}

init()
