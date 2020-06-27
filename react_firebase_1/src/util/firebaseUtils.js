import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyABfY7qUbZK0Iqu3vpmI_uNNvArppFU0WA",
    authDomain: "desterro-web-app.firebaseapp.com",
    databaseURL: "https://desterro-web-app.firebaseio.com",
    projectId: "desterro-web-app",
    storageBucket: "desterro-web-app.appspot.com",
    messagingSenderId: "298276074239",
    appId: "1:298276074239:web:5ba2b1f320bbcb07cf92ca",
    measurementId: "G-PNS58WCJY5"
  };

  export const firebaseImpl = firebase.initializeApp(firebaseConfig);
  export const firebaseDatabase = firebase.database();