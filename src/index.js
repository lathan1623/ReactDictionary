import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCUg4drt_zQ9IbmO1zzL1ZFJr9FnX1BjQs",
    authDomain: "dictionary-12c83.firebaseapp.com",
    databaseURL: "https://dictionary-12c83.firebaseio.com",
    projectId: "dictionary-12c83",
    storageBucket: "dictionary-12c83.appspot.com",
    messagingSenderId: "124821818362",
    appId: "1:124821818362:web:193813f67ab1db6e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();