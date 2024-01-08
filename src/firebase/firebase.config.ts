//Configuracion de firebase
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, collection, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDc52dXj93lXKJ8YR7HlHMalfPoqa3CI3A",
  authDomain: "crudpractica-cd72c.firebaseapp.com",
  projectId: "crudpractica-cd72c",
  storageBucket: "crudpractica-cd72c.appspot.com",
  messagingSenderId: "588369257445",
  appId: "1:588369257445:web:ddbdcc5206a9c3f532450c"
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);

export { db, collection }; 

//Toda esta informacion la provee firebase