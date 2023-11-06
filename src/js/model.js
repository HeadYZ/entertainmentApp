// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDAGuDG-oAmPfEcRguMVNJ0OMBTWVNRiUA',
	authDomain: 'entertainment-app-2f41c.firebaseapp.com',
	databaseURL: 'https://entertainment-app-2f41c-default-rtdb.firebaseio.com',
	projectId: 'entertainment-app-2f41c',
	storageBucket: 'entertainment-app-2f41c.appspot.com',
	messagingSenderId: '665468353790',
	appId: '1:665468353790:web:3df143d7b6ed23ded679af',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const entertainmentState = {
	data: [],
	bookmarked: [],
	trending: [],
	recommended: [],
}

export const fetchEntertainmentData = async () => {
	const respone = await fetch('https://entertainment-app-2f41c-default-rtdb.firebaseio.com/DUMMY_DATA.json')
	const data = await respone.json()
	entertainmentState.data = data
	entertainmentState.data.forEach((title, id) => (title.id = id))
	sortEntertainmentData(entertainmentState.data)
}

const sortEntertainmentData = entertainmentData => {
	for (const data of entertainmentData) {
		data.isBookmarked ? entertainmentState.bookmarked.push(data) : ''
		data.isTrending ? entertainmentState.trending.push(data) : entertainmentState.recommended.push(data)
	}
}

export const currentTrendings = () => entertainmentState.trending

export const recommendedTitles = () => entertainmentState.recommended

export const titlesSearch = searchPhrase => {
	return entertainmentState.data.filter(data => {
		const smallTitle = data.title.toLowerCase()
		return smallTitle.includes(searchPhrase.trim().toLowerCase())
	})
}

export const moviesTitles = () => entertainmentState.data.filter(data => data.category === 'Movie')

export const tvSeriesTitles = () => entertainmentState.data.filter(data => data.category === 'TV Series')

export const bookmarkedTitles = () => entertainmentState.bookmarked

export const toggleBookmarkedTitle = target => {
	console.log(target)
}
