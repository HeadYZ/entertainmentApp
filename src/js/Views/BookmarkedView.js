import View from './View'

class BookmarkedView extends View {
	parentEl = document.querySelector('.bookmarked')

	addHandlerRender(handler) {
		window.addEventListener('load', handler)
	}
	bookmarkHandler(handler) {
		const moviesBox = this.parentEl.querySelector('.bookmarked__movies-box')
		const tvSeriesBox = this.parentEl.querySelector('.bookmarked__tvseries-box')
		this.bookmarkedHandler(handler, moviesBox)
		this.bookmarkedHandler(handler, tvSeriesBox)
	}

	generateMoviesMarkup() {
		return this.data
			.map(title => {
				return title.category === 'Movie'
					? `  <article class="card" tabindex=0 id='${title.id}'>
          <div class='card__img'>
          <img src="${
						(window.innerWidth < 768 && title.thumbnail.regular.small) ||
						(window.innerWidth >= 768 && window.innerWidth <= 1200 && title.thumbnail.regular.medium) ||
						(window.innerWidth > 1200 && title.thumbnail.regular.large)
					}" alt="${title.title}" class="card__img-item">
         <div class="card__container-btn">  <div class="card__btn"><img src='./icon-play.svg' alt='play icon' class="card__btn-icon"/><span class='card__btn-text'>Play</span></div></div>
         <div class='card__shadow'></div>
         </div>
           <div class="card__tags">
             <span class="card__tags-year">${title.year}</span>
             <div class="card__tags-dot"></div>
             <span class="card__tags-category"><img src="
					./icon-category-movie.svg" alt="category icon" class="card__tags-category-icon">${title.category}</span>
             <div class="card__tags-dot"></div>
             <span class="card__tags-topic">${title.rating}</span>
           </div>
           <h3 class="card__title">${title.title}</h3>
           <div class="card__bookmark" tabindex=0><img src='./icon-bookmark-full.svg' alt="bookmark icon"
           class="card__bookmark-icon"></div>
       
         </article>`
					: ''
			})
			.join('')
	}
	generateTVSeriesMarkup() {
		return this.data
			.map(title => {
				return title.category !== 'Movie'
					? `  <article class="card" tabindex=0 id='${title.id}'>
          <div class='card__img'>
          <img src="${
						(window.innerWidth < 768 && title.thumbnail.regular.small) ||
						(window.innerWidth >= 768 && window.innerWidth <= 1200 && title.thumbnail.regular.medium) ||
						(window.innerWidth > 1200 && title.thumbnail.regular.large)
					}" alt="${title.title}" class="card__img-item">
         <div class="card__container-btn">  <div class="card__btn"><img src='./icon-play.svg' alt='play icon' class="card__btn-icon"/><span class='card__btn-text'>Play</span></div></div>
         <div class='card__shadow'></div>
         </div>
           <div class="card__tags">
             <span class="card__tags-year">${title.year}</span>
             <div class="card__tags-dot"></div>
             <span class="card__tags-category"><img src="
             ./icon-category-tv.svg" alt="category icon" class="card__tags-category-icon">${title.category}</span>
             <div class="card__tags-dot"></div>
             <span class="card__tags-topic">${title.rating}</span>
           </div>
           <h3 class="card__title">${title.title}</h3>
           <div class="card__bookmark" tabindex=0><img src='./icon-bookmark-full.svg' alt="bookmark icon"
           class="card__bookmark-icon"></div>
       
         </article>`
					: ''
			})
			.join('')
	}
	generateMarkup() {
		return ` <h2 class="heading-secondary">Bookmarked Movies</h2>
        <div class="bookmarked__movies-box section__cards-box"">
        ${this.generateMoviesMarkup()}
        </div>
        <h2 class="heading-secondary">Bookmarked TV Series</h2>
        <div class="bookmarked__tvseries-box section__cards-box"">
        ${this.generateTVSeriesMarkup()}
        </div>`
	}
}

export default new BookmarkedView()
