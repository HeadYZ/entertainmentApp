class View {
	render(data) {
		this.data = data
		const markup = this.generateMarkup()
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
}
export default View
