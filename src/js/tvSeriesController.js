import * as model from './model'
import TvSeriesView from './Views/TvSeriesView'

const tvSeriesController = () => {
	TvSeriesView.render(model.tvSeriesTitles())
}

const init = () => {
	tvSeriesController()
}

init()
