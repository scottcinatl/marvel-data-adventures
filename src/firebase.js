import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyB7q3Ib6CKeE12Hkflij-XWB9NF_EZoX2U',
  authDomain: 'marvel-data-adventures.firebaseapp.com',
  databaseURL: 'https://marvel-data-adventures.firebaseio.com',
  projectId: 'marvel-data-adventures',
  storageBucket: 'marvel-data-adventures.appspot.com',
  messagingSenderId: '117373483351',
}

firebase.initializeApp(config)

export default firebase
