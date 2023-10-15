import data from '../../data.json'

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

const init = () => {
	card()
}

init()
