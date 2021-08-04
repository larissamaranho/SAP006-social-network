// Este é o ponto de entrada da sua aplicação

//import { myFunction } from './lib/index.js';

//myFunction();

const email = 'larissamaranhor@gmail.com';
const password = '123456';
  //login novo usuario
  
/*firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log('Deu bom');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log('Deu ruim', errorCode, errorMessage);
  });*/


  //login usuario existente
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    console.log("logou");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message

    console.log("nao logou");
  });

  //logout
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });