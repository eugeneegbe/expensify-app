import * as firebase from 'firebase';
import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: 'New deal'
})