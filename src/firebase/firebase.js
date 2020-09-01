import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCXsjvxl9bz0ebJP5ErWhJSp5LaY9KCTa4",
  authDomain: "bd-1-cc335.firebaseapp.com",
  databaseURL: "https://bd-1-cc335.firebaseio.com",
  projectId: "bd-1-cc335",
  storageBucket: "bd-1-cc335.appspot.com",
  messagingSenderId: "321978624094",
  appId: "1:321978624094:web:45a1da149cb0dec5622ccf"
}
firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref().child('Messages');

export {db}
