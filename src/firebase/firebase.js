import * as firebase from 'firebase';
import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const expenseData = {
    sdakjfdsaf: {
        description: 'House rent',
        amount: 500.98,
        createdAt: 3000
    },
    eklsdjfsdf: {
        description: 'Weekly food',
        amount: 300.44,
        createdAt: 10000
    },
    klsajfdkjsafk: {
        description: 'Car Maintenance',
        amount: 3000,
        createdAt: -29000
    }
}


database.ref( 'expenses' ).push( expenseData );
