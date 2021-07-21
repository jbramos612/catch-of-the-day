import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDSKwaCUEinrTflP8YxYkUH1Qm0iOQc44A",
    authDomain: "catch-of-the-day-of-the-dead.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-of-the-dead-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };