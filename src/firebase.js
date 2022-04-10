// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';

// import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyC6Md83KmCjc9ea1GmmAMlvWT9xgvM5LTM",
        authDomain: "bahamasgram-app.firebaseapp.com",
        projectId: "bahamasgram-app",
        storageBucket: "bahamasgram-app.appspot.com",
        messagingSenderId: "58033556326",
        appId: "1:58033556326:web:f68494c2798b3e5edb56a7",
        measurementId: "G-0029L31M9W"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };


