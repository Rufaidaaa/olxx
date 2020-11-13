import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyDV9xUSOVV_0sq_OxTlHEvljSB_kFX2ASs",
    authDomain: "olxx-399d5.firebaseapp.com",
    databaseURL: "https://olxx-399d5.firebaseio.com",
    projectId: "olxx-399d5",
    storageBucket: "olxx-399d5.appspot.com",
    messagingSenderId: "703577237673",
    appId: "1:703577237673:web:d08e7c1f8ce30f221f61b8",
    measurementId: "G-6J951Q212M"
  };

  const Firebase = firebase.initializeApp(firebaseConfig)
  export default Firebase