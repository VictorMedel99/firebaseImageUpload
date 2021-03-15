import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBQsDFW5dHWXeRNig5v1y4LlC5AMKezNv0",
    authDomain: "fir-storage-24a45.firebaseapp.com",
    projectId: "fir-storage-24a45",
    storageBucket: "fir-storage-24a45.appspot.com",
    messagingSenderId: "260626611632",
    appId: "1:260626611632:web:cdee1665259b9c91686a75"
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export  {
    storage, firebase as default
  }