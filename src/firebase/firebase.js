import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBWu9vRgj6SjenNSHR6dON-pfx7_voR7_w",
	authDomain: "todoapp111111.firebaseapp.com",
	databaseURL: "https://todoapp111111.firebaseio.com",
	projectId: "todoapp111111",
	storageBucket: "todoapp111111.appspot.com",
	messagingSenderId: "549975697512",
	appId: "1:549975697512:web:b942c250632f7be03c73dd",
	measurementId: "G-9GC2XG02NQ",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

export { auth, db, provider, firebase };
