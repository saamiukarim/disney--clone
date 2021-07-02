import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDKiGiKz0BbXAPxzSGlBz2Ee6CzRFjiGRw",
    authDomain: "disney-clone-8f38e.firebaseapp.com",
    projectId: "disney-clone-8f38e",
    storageBucket: "disney-clone-8f38e.appspot.com",
    messagingSenderId: "653973092891",
    appId: "1:653973092891:web:29c697d5ef855c8202d6be",
    measurementId: "G-E7J1DD44P9"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;