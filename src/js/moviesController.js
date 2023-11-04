import * as model from './model'
import MoviesView from './Views/MoviesView'

const moviesController = () => {
	MoviesView.render(model.moviesTitles(),true)
}

const init = async () => {
	MoviesView.renderSpinner()
	await model.fetchEntertainmentData()
	MoviesView.clearSpinner()
	moviesController()
}

init()
