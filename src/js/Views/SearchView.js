import View from './View'

class SearchView extends View {
	parentEl = document.querySelector('.search__box')
	searchSection = document.querySelector('.search')
	appBox = document.querySelector('.app__sections-box')
	searchInformation = document.querySelector('.search__heading')

	addHandlerRender(handler){
		handler()
	}

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
		this.searchSection.style.display = ' flex'
	}
	hideSearchPhrase() {
		this.appBox.style.display = 'block'
		this.searchSection.style.display = ' none'
	}

	showSearchInfo(numOfTitles, searchPhrase) {
		numOfTitles <= 0
			? (this.searchInformation.innerHTML = `The title you were looking for was not found.`)
			: (this.searchInformation.innerHTML = `Found ${numOfTitles} results for '${searchPhrase}'`)
	}
	generateMarkup() {
		return this.data
			.map(
				data => `
        <article class="card" tabindex=0 id=${data.id}>
       <div class='card__img'>
       <img src="${
					(window.innerWidth < 768 && data.thumbnail.regular.small) ||
					(window.innerWidth >= 768 && window.innerWidth <= 1200 && data.thumbnail.regular.medium) ||
					(window.innerWidth > 1200 && data.thumbnail.regular.large)
				}" alt="${data.title}" class="card__img-item">
      <div class="card__container-btn">  <div class="card__btn"><img src='./icon-play.svg' alt='play icon' class="card__btn-icon"/><span class='card__btn-text'>Play</span></div></div>
      <div class='card__shadow'></div>
      </div>
        <div class="card__tags">
          <span class="card__tags-year">${data.year}</span>
          <div class="card__tags-dot"></div>
          <span class="card__tags-category"><img src="${
						data.category === 'Movie' ? './icon-category-movie.svg' : './icon-category-tv.svg'
					}" alt="category icon" class="card__tags-category-icon">${data.category}</span>
          <div class="card__tags-dot"></div>
          <span class="card__tags-topic">${data.rating}</span>
        </div>
        <h3 class="card__title">${data.title}</h3>
        <div class="card__bookmark"><img src=${
					data.isBookmarked ? './icon-bookmark-full.svg' : './icon-bookmark-empty.svg'
				} alt="bookmark icon"
        class="card__bookmark-icon"></div>
    
      </article>
        `
			)
			.join('')
	}
}

export default new SearchView()
