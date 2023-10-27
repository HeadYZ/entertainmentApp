import * as model from './model'
import MoviesView from './Views/MoviesView'

const moviesController = () => {
	MoviesView.render(model.moviesTitles())
}

const init = () => {
	moviesController()
}

init()
