import View from './View'

import { updateDataFirebase } from '../firebase'

class BookmarkedView extends View {
	parentEl = document.querySelector('.bookmarked')

	bookmarkedHandler() {
		const allCards = this.parentEl.querySelector('.bookmarked__movies-box')
		allCards.addEventListener('click', e => {
			if (e.target.classList.contains('card__bookmark') || e.target.classList.contains('card__bookmark-icon')) {
				const card = e.target.closest('.card')
				const bookmarkIcon = card.querySelector('.card__bookmark-icon')
				const fullIcon = './icon-bookmark-full.svg'
				const emptyIcon = './icon-bookmark-empty.svg'

				bookmarkIcon.src.includes('icon-bookmark-empty.svg')
					? (bookmarkIcon.src = fullIcon)
					: (bookmarkIcon.src = emptyIcon)

				this.sendData(card.id)
			}
		})
	}
	sendData(target) {
		const titleID = target
		const titleSought = this.data.find(title => title.id === Number(titleID))

		fetch(`https://entertainment-app-2f41c-default-rtdb.firebaseio.com/DUMMY_DATA/${titleID}.json`)
			.then(res => res.json())
			.then(data => {
				const isBookmarked = data.isBookmarked === true ? false : true
				const updateBookmarkedData = { ...titleSought, isBookmarked: isBookmarked }
				updateDataFirebase(updateBookmarkedData, updateBookmarkedData.id)
			})
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
