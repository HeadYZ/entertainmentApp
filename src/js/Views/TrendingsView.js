import View from './View'

class TrendingsView extends View {
	parentEl = document.querySelector('.trending__box')
	sliderContainer = document.querySelector('.trending__box')
	isDragStart = false
	prevPageX
	prevContainerScrollLeft

	addHandlerRender(handler) {
		handler()
	}

	bookmarkHandler(handler) {
		this.bookmarkedHandler(handler, this.parentEl)
	}

	generateMarkup() {
		return this.data
			.map(
				data => ` <article class="trending__card card" tabindex=0 id='${data.id}'>
    <img src="${window.innerWidth < 768 ? data.thumbnail.trending.small : data.thumbnail.trending.large}" alt="${
					data.title
				}"
      class="trending__card-img">
    <div class="trending__card-box">
      <div class="trending__card-tags">
        <span class="trending__card-year">${data.year}</span>
        <div class="trending__card-dot"></div>
        <span class="trending__card-category"><img src="${
					data.category === 'Movie' ? './icon-category-movie.svg' : './icon-category-tv.svg'
				}" alt="category icon" class="trending__card-category-icon">${data.category}</span>
        <div class="trending__card-dot"></div>
        <span class="trending__card-topic">${data.rating}</span>
      </div>
      <h3 class="trending__card-title">${data.title}</h3>
    </div>
    <div class="card__bookmark" tabindex=0><img src=${
			data.isBookmarked ? './icon-bookmark-full.svg' : './icon-bookmark-empty.svg'
		} alt="empty bookmark icon"
        class="card__bookmark-icon" ></div>
      <div class="card__container-btn">  <div class="card__btn"><img src='./icon-play.svg' alt='play icon' class="card__btn-icon"/><span class='card__btn-text'>Play</span></div></div>
      <div class="card__shadow"></div>
  </article>`
			)
			.join('')
	}
}

export default new TrendingsView()
