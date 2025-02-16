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
   // .catch((error)=> error)
}

// função para criar posts
export const createPost = (inputText, inputName) => {
  const userConnected = firebase.auth().currentUser // pega dados do usuario que está conectado
  const posts = firebase.firestore().collection("Posts").add({
    name: inputName,
    email: userConnected.email,
    data: /*new Date(),*/   (new Date()).toString().slice(4,21),
    post: inputText, 
    like: [],
    idUser: userConnected.uid,
    idPost:""
  })
return posts
}

export const signOut = () => firebase.auth().signOut();

export const showPostFeed = () => firebase.firestore().collection("Posts").orderBy("data","desc").get();

export const getPost = (idPost) => firebase.firestore().collection("Posts").doc(idPost).get();

export const likePost = (idUser, idPost) => firebase.firestore().collection("Posts").doc(idPost).update({ like: firebase.firestore.FieldValue.arrayUnion(idUser)});

export const unLikePost = (idUser, idPost) => firebase.firestore().collection("Posts").doc(idPost).update({ like: firebase.firestore.FieldValue.arrayRemove(idUser)});

export const editPost = (textPost, idPost) => firebase.firestore().collection("Posts").doc(idPost).update({ post: textPost});

export const deletePost = (idPost) => firebase.firestore().collection("Posts").doc(idPost).delete();

export const confirmAction = (msg) => confirm(msg);