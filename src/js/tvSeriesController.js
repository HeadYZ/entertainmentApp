import * as model from './model'
import TvSeriesView from './Views/TvSeriesView'

const tvSeriesController = () => {
	TvSeriesView.render(model.tvSeriesTitles(), true)
}

const init = async () => {
	TvSeriesView.renderSpinner()
	await model.fetchEntertainmentData()
	TvSeriesView.clearSpinner()
	tvSeriesController()
}

init()
