export const createAccount = (email, password, confirmPassword) => {
  if (password !== confirmPassword) {
    alert('Senha incorreta! Digite novamente');
    return false;
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebase.auth().currentUser.sendEmailVerification()
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') {
        alert('E-mail já cadastrado');
      } else if (errorCode === 'auth/invalid-email') {
        alert('E-mail inválido');
      } else if (errorCode === 'auth/weak-password') {
        alert('Senha fraca');
      } else {
        alert('Algo deu errado. Por favor, tente novamente.');
      }
    });
};


const auth = firebase.auth()

// login exportado do firebase
export const loginWithEmail = (email, password) => auth.signInWithEmailAndPassword(email, password)

// login google exportado do firebase
export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithRedirect(provider)
}