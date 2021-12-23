import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDUHWcr1EGQiMUZXc39Mp5GUpG825srDiw",
  authDomain: "complaint-3098c.firebaseapp.com",
  projectId: "complaint-3098c",
  storageBucket: "complaint-3098c.appspot.com",
  messagingSenderId: "278294198736",
  appId: "1:278294198736:web:69f7359be6e7da0246e1d5"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

