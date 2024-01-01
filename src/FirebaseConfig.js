// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import firebase from 'firebase/app';
// // import 'firebase/firestore';
// // import 'firebase/storage';

// const FirebaseConfig = {
//   apiKey: "AIzaSyATW3DnpjAqwFzGgD0q3z9IsucSq2wMsiQ",
//   authDomain: "memoires-450dc.firebaseapp.com",
//   projectId: "memoires-450dc",
//   storageBucket: "memoires-450dc.appspot.com",
//   messagingSenderId: "798538206811",
//   appId: "1:798538206811:web:45ac1f311a6a399b08397e"
// };

// const app = initializeApp(FirebaseConfig);
// export const auth = getAuth(app);
// const firestore = firebase.firestore();
// const storage = firebase.storage();
// export { firestore, storage };
// Importez seulement les modules dont vous avez besoin


import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const FirebaseConfig = {
  apiKey: "AIzaSyATW3DnpjAqwFzGgD0q3z9IsucSq2wMsiQ",
  authDomain: "memoires-450dc.firebaseapp.com",
  projectId: "memoires-450dc",
  storageBucket: "memoires-450dc.appspot.com",
  messagingSenderId: "798538206811",
  appId: "1:798538206811:web:45ac1f311a6a399b08397e"
};


const app = initializeApp(FirebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };


// Initialisation de l'application
// const app = initializeApp(FirebaseConfig);
// // const auth = getAuth(app);
// const firestore = getFirestore(app);
// const storage = getStorage(app);
// export const auth = getAuth(app);

// export {  firestore, storage };

