import * as firebase from 'firebase';

/**
 * Конфигурация созданного тна firebase.google.com приложения  
 */
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

/**
 * Переменная с ссылкой на каталог Messages базе данных 
 */
const db = firebase.database().ref().child('Messages');

export {db}
