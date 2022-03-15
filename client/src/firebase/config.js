import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAN26WdksganiVUDE0-Df2mDTEq0Chngwg",
    authDomain: "surveysystem-ff5a7.firebaseapp.com",
    projectId: "surveysystem-ff5a7",
    storageBucket: "surveysystem-ff5a7.appspot.com",
    messagingSenderId: "53396831697",
    appId: "1:53396831697:web:5710f297cee436a8b374f0"
  };

  firebase.initializeApp(firebaseConfig)
  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();
  export{projectFirestore,projectAuth};