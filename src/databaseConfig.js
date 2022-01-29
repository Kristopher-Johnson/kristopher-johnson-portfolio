import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAPZBrbYVEgaFsCe5v7MG8OYjTHIgUoJTU",
  authDomain: "kristopher-johnson-portfolio.firebaseapp.com",
  databaseURL:
    "https://kristopher-johnson-portfolio-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kristopher-johnson-portfolio",
  storageBucket: "kristopher-johnson-portfolio.appspot.com",
  messagingSenderId: "41845686830",
  appId: "1:41845686830:web:f626e549e62278ef6b15bf",
  measurementId: "G-QLXMTEGVPB",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export default database;
