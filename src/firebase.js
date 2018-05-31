import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyANcDGgJz5Qlg5cXIyloDdI7d-2XmlDdio",
  authDomain: "smartpt-jaimieharrow.firebaseapp.com",
  databaseURL: "https://smartpt-jaimieharrow.firebaseio.com",
  projectId: "smartpt-jaimieharrow",
  storageBucket: "smartpt-jaimieharrow.appspot.com",
  messagingSenderId: "1097007164435"
};
firebase.initializeApp(config);

export default firebase;
