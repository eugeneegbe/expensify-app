import * as firebase from 'firebase';
import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set( {
    name: 'New deal',
    age: 27,
    isSingle: false,
    location: {
        city: 'Yaounde',
        Country: 'Cameroon'
    }
} ).then( () => {
    console.log( 'Data added successfully!' )
} ).catch( ( e ) => {
    console.log( 'Something went wrong!', e)
} );

var adaRef = firebase.database().ref( 'isSingle' );
adaRef.remove()
  .then(function() {
    console.log("Remove succeeded.")
  })
  .catch(function(error) {
    console.log("Remove failed: " + error.message)
  });