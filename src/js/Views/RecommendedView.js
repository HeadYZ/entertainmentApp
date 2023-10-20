import View from './View'
class RecommendedView extends View {
	parentEl = document.querySelector('.recommended__box')
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
        <div class="recommended__card-bookmark"><img src="./icon-bookmark-empty.svg" alt="empty bookmark icon"
        class="recommended__card-bookmark-icon"></div>
    
      </article>
        `
	}
}

export default new RecommendedView()
