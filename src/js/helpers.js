import { initializeApp } from 'firebase/app'

const firebaseConfig = {
	//
}

const app = initializeApp(firebaseConfig)

import { getDatabase, ref, update } from 'firebase/database'

const db = getDatabase()

///// function which is responsible for get data from firebase

export const getJSON = async url => {
	try {
		const respone = await fetch(url)
		const data = await respone.json()
		return data
	} catch (err) {
		console.error(err)
	}
}

///// function which is responsible for update bookmark data on firebase

export const updateDataFirebase = (data, id) => {
	update(ref(db, `DUMMY_DATA/${id}`), data)
}
