import * as model from './model'
import TrendingsView from './Views/TrendingsView'
import RecommendedView from './Views/RecommendedView'

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

const init = () => {
	trendingsController()
	recommendedController()
}

init()
