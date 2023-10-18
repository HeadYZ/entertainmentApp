import View from './View'

class TrendingsView extends View {
	parentEl = document.querySelector('.trending__box')
	sliderContainer = document.querySelector('.trending__box')
	isDragStart = false
	prevPageX
	prevContainerScrollLeft

	generateMarkup() {
		console.log(window.innerWidth)
		return ` <article class="trending__card" tabindex=0>
        <img src="${
					window.innerWidth < 768 ? this.data.thumbnail.trending.small : this.data.thumbnail.trending.large
				}" alt="beyond-earth"
          class="trending__card-img">
        <div class="trending__card-box">
          <div class="trending__card-tags">
            <span class="trending__card-year">${this.data.year}</span>
            <div class="trending__card-dot"></div>
            <span class="trending__card-category"><img src="${
							this.data.category === 'Movie' ? './icon-category-movie.svg' : './icon-category-tv.svg'
						}" alt="category icon"
                class="trending__card-category-icon">
              ${this.data.category}</span>
            <div class="trending__card-dot"></div>
            <span class="trending__card-topic">${this.data.rating}</span>
          </div>
          <h3 class="trending__card-title">${this.data.title}</h3>
        </div>
        <div class="trending__card-bookmark"><img src="./icon-bookmark-empty.svg" alt="empty bookmark icon"
            class="trending__card-bookmark-icon"></div>
        <div class="trending__card-shadow"></div>
  
      </article>`
	}
}

export default new TrendingsView()
