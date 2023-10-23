import View from './View'

class SearchView extends View {
	parentEl = document.querySelector('.searchTitles')
	appBox = document.querySelector('.app__sections-box')

	searchEventHandler(handler) {
		const input = document.querySelector('.app__search-input')
		input.addEventListener(
			'keyup',
			function (e) {
				if (e.target.value.trim().length > 0) this.showSearchPhrase()
				if (e.target.value.trim().length <= 0) this.hideSearchPhrase()
				handler(e.target.value)
			}.bind(this)
		)
	}

	showSearchPhrase() {
		this.parentEl.innerHTML = ''
		this.appBox.style.display = 'none'
		this.parentEl.style.display = ' block'
	}
	hideSearchPhrase() {
		this.appBox.style.display = 'block'
		this.parentEl.style.display = ' none'
	}

	generateMarkup() {
		return `
        <article class="recommended__card" tabindex=0>
       <div class='recommended__card-img'>
       <img src="${
					(window.innerWidth < 768 && this.data.thumbnail.regular.small) ||
					(window.innerWidth >= 768 && window.innerWidth <= 1200 && this.data.thumbnail.regular.medium) ||
					(window.innerWidth > 1200 && this.data.thumbnail.regular.large)
				}" alt="${this.data.title}" class="recommended__card-img-item">
      <div class="card-container-btn">  <div class="card-btn"><img src='./icon-play.svg' alt='play icon' class="card-btn-icon"/><span class='card-btn-text'>Play</span></div></div>
      <div class='card-shadow'></div>
      </div>
        <div class="recommended__card-tags">
          <span class="recommended__card-tags-year">${this.data.year}</span>
          <div class="recommended__card-tags-dot"></div>
          <span class="recommended__card-tags-category"><img src="${
						this.data.category === 'Movie' ? './icon-category-movie.svg' : './icon-category-tv.svg'
					}" alt="category icon" class="recommended__card-tags-category-icon">${this.data.category}</span>
          <div class="recommended__card-tags-dot"></div>
          <span class="recommended__card-tags-topic">${this.data.rating}</span>
        </div>
        <h3 class="recommended__card-title">${this.data.title}</h3>
        <div class="recommended__card-bookmark"><img src=${
					this.data.isBookmarked ? './icon-bookmark-full.svg' : './icon-bookmark-empty.svg'
				} alt="bookmark icon"
        class="recommended__card-bookmark-icon"></div>
    
      </article>
        `
	}
}

export default new SearchView()
