import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAp-eM1248L6LXlkYel0n8JCuyZkCxDCmY",
    authDomain: "todo-list-app-83abc.firebaseapp.com",
    projectId: "todo-list-app-83abc",
    storageBucket: "todo-list-app-83abc.appspot.com",
    messagingSenderId: "314221415827",
    appId: "1:314221415827:web:0e6faaf71a666852946c66",
    measurementId: "G-Z9MYNPDYFP"
})

const db = firebaseApp.firestore();

export default db;