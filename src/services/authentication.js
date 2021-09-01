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
  return firebase.auth().signInWithPopup(provider)
    .then((result) => result)
}

// função para criar posts
export const createPost = (inputText, inputName) => {
  const userConnected = firebase.auth().currentUser // pega dados do usuario que está conectado
  const posts = firebase.firestore().collection("Posts").add({
    name: inputName,
    email: userConnected.email,
    data: new Date(),    //(new Date()).toString().slice(4,21),
    post: inputText, 
    like: []
  })
return posts
}

// função para mostrar os posts
/*export const showPostFeed = (addPost) => {
  firebase.firestore().collection("Posts").onSnapshot((post) => {
    post.forEach((post) => addPost(post))
  })
}*/

export const showPostFeed = () => firebase.firestore().collection("Posts").orderBy("data","desc").get();
    
  
