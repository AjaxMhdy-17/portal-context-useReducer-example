
import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyA2H-Wtd6F6FszVkcaXx79rcEw2IWIZjG4",
    authDomain: "colorbuilder-645ae.firebaseapp.com",
    projectId: "colorbuilder-645ae",
    storageBucket: "colorbuilder-645ae.appspot.com",
    messagingSenderId: "274149493523",
    appId: "1:274149493523:web:4731992ab5f00aebafa8e6",
    measurementId: "G-14YR1K7H9L"
  };
  
  // Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export default Firebase 


// export const signInWithGoogle = () => {
//   auth.signInWithPopup(googleProvider).then((res) => {
//     console.log(res.user)
//   }).catch((error) => {
//     console.log(error.message)
//   })
// }
