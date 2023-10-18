import * as model from './model'
import TrendingsView from './Views/TrendingsView'

const trendingsController = () => {
	const currentTrendings = model.currentTrendings()
	for (const trendingTitle of currentTrendings) {
		TrendingsView.render(trendingTitle)
	}
	TrendingsView.draggableSlider()
}


const init = () => {
	trendingsController()
}

init()
