class View {
	render(data, isCard) {
		this.data = data
		const markup = isCard ? this.generateCardMarkup() : this.generateMarkup()
		this.parentEl.insertAdjacentHTML('beforeend', markup)
	}

	draggableSlider() {
		this.draggableLive()
	}
	startDrag(e) {
		this.isDragStart = true
		this.prevPageX = e.pageX
		this.prevContainerScrollLeft = this.sliderContainer.scrollLeft
	}
	scrollContainer(e) {
		if (!this.isDragStart) return
		e.preventDefault()
		let offsetDistance = e.pageX - this.prevPageX
		this.sliderContainer.scrollLeft = this.prevContainerScrollLeft - offsetDistance
	}
	endDrag() {
		this.isDragStart = false
	}

	draggableLive() {
		this.sliderContainer.addEventListener('mousedown', this.startDrag.bind(this))
		this.sliderContainer.addEventListener('mousemove', this.scrollContainer.bind(this))
		this.sliderContainer.addEventListener('mouseup', this.endDrag.bind(this))
		this.sliderContainer.addEventListener('mouseover', this.endDrag.bind(this))
	}

	renderSpinner() {
		const markup = `<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`
		this.parentEl.innerHTML = markup
	}
	clearSpinner() {
		this.parentEl.innerHTML = ''
	}
	bookmarkedHandler(handler,cardsBox) {
		// get a box containing cards
		const allCards = cardsBox

		// add event delegation responsible  for bookmark changes
		allCards.addEventListener('click', e => {
			if (e.target.classList.contains('card__bookmark') || e.target.classList.contains('card__bookmark-icon')) {
				const card = e.target.closest('.card')
				const bookmarkIcon = card.querySelector('.card__bookmark-icon')
				const fullIcon = './icon-bookmark-full.svg'
				const emptyIcon = './icon-bookmark-empty.svg'

				bookmarkIcon.src.includes('icon-bookmark-empty.svg')
					? (bookmarkIcon.src = fullIcon)
					: (bookmarkIcon.src = emptyIcon)

					// update bookmarked information on firebase
				handler(card.id, this.data)
			}
		})
	}

	generateCardMarkup() {
		return this.data
			.map(title => {
				return `
    <article class="card" tabindex=0 id='${title.id}'>
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
    <div class="card__bookmark" tabindex=0><img src=${
			title.isBookmarked ? './icon-bookmark-full.svg' : './icon-bookmark-empty.svg'
		} alt="bookmark icon"
    class="card__bookmark-icon"></div>

  </article>
    `
			})
			.join('')
	}
}
export default View
