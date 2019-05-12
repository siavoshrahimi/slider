import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig ={
    apiKey: "AIzaSyBqiKSDVVecqZ0Ab95eb8sCIuHfNLzNmK4",
    authDomain: "slider-891ec.firebaseapp.com",
    databaseURL: "https://slider-891ec.firebaseio.com",
    projectId: "slider-891ec",
    storageBucket: "slider-891ec.appspot.com",
    messagingSenderId: "744695513126",
    appId: "1:744695513126:web:b3d07b379df2a33a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
    prompt:'select_account'
})
const database = firebase.database();
export {firebase, googleAuthProvider, database};