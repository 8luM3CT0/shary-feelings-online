import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyB90R0K1Ww7hca6gdEA542FRS1t7nA2NO0',
  authDomain: 'blog-devel.firebaseapp.com',
  projectId: 'blog-devel',
  storageBucket: 'blog-devel.appspot.com',
  messagingSenderId: '782901960463',
  appId: '1:782901960463:web:d538b381b06fef7f0ea87a',
  measurementId: 'G-W23QEMLJN7'
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const creds = app.auth()
const store = app.firestore()
const warehouse = app.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export { creds, provider, store, warehouse }
