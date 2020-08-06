import * as firebase from 'firebase';
import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set( {
    name: 'New deal'
} ).then( () => {
    console.log( 'Data added successfully!' )
} ).catch( ( e ) => {
    console.log( 'Something went wrong!', e)
} );