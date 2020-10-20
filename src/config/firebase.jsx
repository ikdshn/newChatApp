import * as firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEy93PNfLF_aVpvrw_hVy5Q2ahQxPCdQg",
  authDomain: "chat-app-1e841.firebaseapp.com",
  databaseURL: "https://chat-app-1e841.firebaseio.com",
  projectId: "chat-app-1e841",
  storageBucket: "chat-app-1e841.appspot.com",
  messagingSenderId: "613654899564",
  appId: "1:613654899564:web:166834093753dadf32e149",
  measurementId: "G-DXTB6MQFPC",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
