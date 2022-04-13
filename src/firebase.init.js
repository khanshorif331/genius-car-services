// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyANUaWtBpYZ7PjOxkQkSua4gEToJgUZKrI',
	authDomain: 'genius-car-services-caca4.firebaseapp.com',
	projectId: 'genius-car-services-caca4',
	storageBucket: 'genius-car-services-caca4.appspot.com',
	messagingSenderId: '207327263650',
	appId: '1:207327263650:web:d3b022b67452452c8a90fb',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
