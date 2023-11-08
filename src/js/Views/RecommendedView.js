import View from './View'
class RecommendedView extends View {
	parentEl = document.querySelector('.recommended__box')
	addHandlerRender(handler) {
		handler()
	}
	bookmarkHandler(handler) {
		this.bookmarkedHandler(handler, this.parentEl)
	}
}

export default new RecommendedView()
