import View from './View'
class MoviesView extends View {
	parentEl = document.querySelector('.movies__box')

	generateMarkup() {
		return this.data
			.map(title => {
				return `
    <article class="card" tabindex=0>
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
      <span class="card__tags-category"><img src="${
				title.category === 'Movie' ? './icon-category-movie.svg' : './icon-category-tv.svg'
			}" alt="category icon" class="card__tags-category-icon">${title.category}</span>
      <div class="card__tags-dot"></div>
      <span class="card__tags-topic">${title.rating}</span>
    </div>
    <h3 class="card__title">${title.title}</h3>
    <div class="card__bookmark"><img src=${
			title.isBookmarked ? './icon-bookmark-full.svg' : './icon-bookmark-empty.svg'
		} alt="bookmark icon"
    class="card__bookmark-icon"></div>

  </article>
    `
			})
			.join('')
	}
}

export default new MoviesView()
