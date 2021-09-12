import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCCwSXSazkvaMZ4UW7HCsFz9ozA8PbMALo",
  authDomain: "testify-d2d45.firebaseapp.com",
  projectId: "testify-d2d45",
  storageBucket: "testify-d2d45.appspot.com",
  messagingSenderId: "164426624044",
  appId: "1:164426624044:web:ff95c90fac092b0fb5b589",
};

firebase.initializeApp(config);
const db = firebase.firestore();

export default db;
