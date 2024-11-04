

  // Import the functions you need from the SDKs you need

  import { initializeApp } from "firebase/app";


 // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    apiKey: "AIzaSyDqc7aZUnBM6BM6ri0m2oj7FkNKnDESirM",

    authDomain: "linkedspace-76d77.firebaseapp.com",

    projectId: "linkedspace-76d77",

    storageBucket: "linkedspace-76d77.appspot.com",

    messagingSenderId: "897208957659",

    appId: "1:897208957659:web:e129682558190395686afe",

    measurementId: "G-NN1CQYQGG0"



  };

//import { getDatabase, ref, child, get } from "firebase/database";
//
//const dbRef = ref(getDatabase());
//get(child(dbRef, `users/${userId}`)).then((snapshot) => {
//  if (snapshot.exists()) {
//    console.log(snapshot.val());
//  } else {
//    console.log("No data available");
//  }
//}).catch((error) => {
//  console.error(error);
//});





  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  //const analytics = getAnalytics(app);

