import firebase from 'firebase';

// TODO: class化してDBの追加・取得処理を関数化

const config = {
  apiKey: 'AIzaSyCPYzBxcigadg2VpDeXaGoQWJ5xUtCJ09U',
  authDomain: 'goggl-1941d.firebaseapp.com',
  databaseURL: 'https://goggl-1941d.firebaseio.com',
  projectId: 'goggl-1941d',
  storageBucket: 'goggl-1941d.appspot.com',
  messagingSenderId: '570019289404',
  appId: '1:570019289404:web:ab4e6cf6221ba9c4b02639',
};

firebase.initializeApp(config);

export default firebase.firestore();
