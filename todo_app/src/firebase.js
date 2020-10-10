// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCCyDqunCq4pmvZSd2WYUfyR4eqjYNIMcI",
//   authDomain: "todo-ap-ab.firebaseapp.com",
//   databaseURL: "https://todo-ap-ab.firebaseio.com",
//   projectId: "todo-ap-ab",
//   storageBucket: "todo-ap-ab.appspot.com",
//   messagingSenderId: "378245662495",
//   appId: "1:378245662495:web:fa1bbc5f469ed8fc07922a",
//   measurementId: "G-7SZ3NRJ75L",
// };
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCCyDqunCq4pmvZSd2WYUfyR4eqjYNIMcI",
  authDomain: "todo-ap-ab.firebaseapp.com",
  databaseURL: "https://todo-ap-ab.firebaseio.com",
  projectId: "todo-ap-ab",
  storageBucket: "todo-ap-ab.appspot.com",
  messagingSenderId: "378245662495",
  appId: "1:378245662495:web:fa1bbc5f469ed8fc07922a",
  measurementId: "G-7SZ3NRJ75L",
});
const db = firebaseApp.firestore();
// export { db };
export default db;
