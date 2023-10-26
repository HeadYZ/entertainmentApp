import View from './View'
class RecommendedView extends View {
	parentEl = document.querySelector('.recommended__box')

	generateMarkup() {
		return `
        <article class="card" tabindex=0>
       <div class='card__img'>
       <img src="${
					(window.innerWidth < 768 && this.data.thumbnail.regular.small) ||
					(window.innerWidth >= 768 && window.innerWidth <= 1200 && this.data.thumbnail.regular.medium) ||
					(window.innerWidth > 1200 && this.data.thumbnail.regular.large)
				}" alt="${this.data.title}" class="card__img-item">
      <div class="card__container-btn">  <div class="card__btn"><img src='./icon-play.svg' alt='play icon' class="card__btn-icon"/><span class='card__btn-text'>Play</span></div></div>
      <div class='card__shadow'></div>
      </div>
        <div class="card__tags">
          <span class="card__tags-year">${this.data.year}</span>
          <div class="card__tags-dot"></div>
          <span class="card__tags-category"><img src="${
						this.data.category === 'Movie' ? './icon-category-movie.svg' : './icon-category-tv.svg'
					}" alt="category icon" class="card__tags-category-icon">${this.data.category}</span>
          <div class="card__tags-dot"></div>
          <span class="card__tags-topic">${this.data.rating}</span>
        </div>
        <h3 class="card__title">${this.data.title}</h3>
        <div class="card__bookmark"><img src=${
					this.data.isBookmarked ? './icon-bookmark-full.svg' : './icon-bookmark-empty.svg'
				} alt="bookmark icon"
        class="card__bookmark-icon"></div>
    
      </article>
        `
	}
}

export default new RecommendedView()
