import View from './View'
class MoviesView extends View {
	parentEl = document.querySelector('.movies__box')

	addHandlerRender(handler) {
		window.addEventListener('load', handler)
	}

	bookmarkHandler(handler) {
		this.bookmarkedHandler(handler, this.parentEl)
	}
}

export default new MoviesView()
