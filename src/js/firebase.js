import { initializeApp } from 'firebase/app'

const firebaseConfig = {
	apiKey: 'AIzaSyDAGuDG-oAmPfEcRguMVNJ0OMBTWVNRiUA',
	authDomain: 'entertainment-app-2f41c.firebaseapp.com',
	databaseURL: 'https://entertainment-app-2f41c-default-rtdb.firebaseio.com',
	projectId: 'entertainment-app-2f41c',
	storageBucket: 'entertainment-app-2f41c.appspot.com',
	messagingSenderId: '665468353790',
	appId: '1:665468353790:web:3df143d7b6ed23ded679af',
}

const app = initializeApp(firebaseConfig)

import { getDatabase, ref, update, child, get } from 'firebase/database'

export const db = getDatabase()

export const updateDataFirebase = (data, id) => {
	update(ref(db, `DUMMY_DATA/${id}`), data)
}


