
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBn2zTgVSaWBUIsRtK61Dd33DdBtFZ96UU",
    authDomain: "notesapp-df7f2.firebaseapp.com",
    projectId: "notesapp-df7f2",
    storageBucket: "notesapp-df7f2.appspot.com",
    messagingSenderId: "207573888688",
    appId: "1:207573888688:web:50982b35521ded64471575",
    measurementId: "G-0XRWLJMZVW"
};

const Firebase = firebase.initializeApp(firebaseConfig);

export const Database = Firebase.database() 


export default Firebase ;
