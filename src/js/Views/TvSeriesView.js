import View from './View'
class TvSeriesView extends View {
	parentEl = document.querySelector('.tv-series__box')

	addHandlerRender(handler) {
		window.addEventListener('load', handler)
	}

	bookmarkHandler(handler) {
		this.bookmarkedHandler(handler, this.parentEl)
	}
}

export default new TvSeriesView()
