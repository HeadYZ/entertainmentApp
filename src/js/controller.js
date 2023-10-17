import data from '../../data.json'

const trendingContainer = document.querySelector('.trending__box')

const card = () => {
	const trendingBox = document.querySelector('.trending__box')

	const currentTrendings = data.filter(data => data.isTrending === true)

	for (const trendingdata of currentTrendings) {
		const markup = ` <article class="trending__card" tabindex=0>
        <img src="${
					window.innerWidth > 768 ? trendingdata.thumbnail.trending.small : trendingdata.thumbnail.trending.large
				}" alt="beyond-earth"
          class="trending__card-img">
        <div class="trending__card-box">
          <div class="trending__card-tags">
            <span class="trending__card-year">${trendingdata.year}</span>
            <div class="trending__card-dot"></div>
            <span class="trending__card-category"><img src="${
							trendingdata.category === 'Movie' ? './icon-category-movie.svg' : './icon-category-tv.svg'
						}" alt="category icon"
                class="trending__card-category-icon">
              ${trendingdata.category}</span>
            <div class="trending__card-dot"></div>
            <span class="trending__card-topic">${trendingdata.rating}</span>
          </div>
          <h3 class="trending__card-title">${trendingdata.title}</h3>
        </div>
        <div class="trending__card-bookmark"><img src="./icon-bookmark-empty.svg" alt="empty bookmark icon"
            class="trending__card-bookmark-icon"></div>
        <div class="trending__card-shadow"></div>
  
      </article>`

		trendingBox.insertAdjacentHTML('beforeend', markup)
	}
}

const draggableSlider = dragContainer => {
	this.draggableContainer = dragContainer
}

class DraggableSlider {
	parentEl
	constructor(sliderContainer) {
		this.parentEl = sliderContainer
		this.mouseEventHandler()
	}
	getHorizontialPosition(e) {
		const clickedHorizontialPosition = e.pageX
	}
	mouseEventHandler() {
		this.parentEl.addEventListener('mousedown', this.getHorizontialPosition)
	}
}

const trenindingDragSlider = new DraggableSlider(trendingContainer)

// let isDragStart = false,
// 	prevPageX,
// 	prevScrollLeft

// const dragStart = e => {
// 	console.log(e.pageX)
// 	isDragStart = true
// 	prevPageX = e.pageX
// 	prevScrollLeft = trendingContainer.scrollLeft
// }

// const dragStop = () => {
// 	isDragStart = false
// }
// const draggableSlider = e => {
// 	if (!isDragStart) return
// 	e.preventDefault()
// 	let positionFidd = e.pageX - prevPageX
// 	trendingContainer.scrollLeft = prevScrollLeft - positionFidd
// }

// trendingContainer.addEventListener('mousedown', dragStart)
// trendingContainer.addEventListener('mouseup', dragStop)
// trendingContainer.addEventListener('mouseover', dragStop)
// trendingContainer.addEventListener('mousemove', draggableSlider)

const init = () => {
	card()
}

init()
