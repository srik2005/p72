import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCQYu7VKP29Xlug7n2mLUSy3WdErmOn31c",
    authDomain: "wily20-e800b.firebaseapp.com",
    databaseURL: "https://wily20-e800b.firebaseio.com",
    projectId: "wily20-e800b",
    storageBucket: "wily20-e800b.appspot.com",
    messagingSenderId: "749761750410",
    appId: "1:749761750410:web:b6f5db23de0252f31b1473"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore(); 