import { route } from "../../routes.js";
import { loginWithEmail, loginWithGoogle } from "../../services/authentication.js";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithRedirect } from "firebase/auth";

const auth = getAuth();
signInWithRedirect(auth, provider);
const provider = new GoogleAuthProvider();

export const login = () => {
  const rootElement = document.createElement("div");
  const container = `
  <header class="img-login">
  <img class="logo-cel" src="./img/logo-login.png">
</header>  
  <h2 class="title">As Doceiras</h2>
    <p id="message-error" class="message-error">
  <form class="container-login" action="">
    <input type="text" id="email" class="input" placeholder="Email"><br>
    <input type="password" id="password" class="input" placeholder="Senha"><br>
  </form>
  <div class="container-reset">
    <a class="reset-password" id="reset" href="/reset">Esqueceu a senha?</a><br>
  </div>
  <form class="checkbox-login">
    <input type="checkbox"name="remember"><label for="remember">Lembrar meus dados</label>
  </form>
  <div class="container-btn">
    <button id="btn-login" class="login-btn">ENTRAR</button>
  </div>
  <hr class="line">
  <h4 class="register-login">Não tem cadastro? <span><a href="/registration" id="registration">Cadastre-se</a></span><br> Ou </h4>
  <div class="container-btn">
    <button id="btn-google" class="btn-google" type="onLoad"></button>
  </div>
  `;

  rootElement.innerHTML = container;

  const email = rootElement.querySelector("#email")
  console.log(email)
  const password = rootElement.querySelector("#password")
  console.log(password)

  // login com email e senha cadastrados
  const btnLogin = rootElement.querySelector('#btn-login');
  btnLogin.addEventListener("click", (event) => {
    event.preventDefault();
    loginWithEmail(email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        route("/feed");
        return user;
      })
/*      .catch((error) => {
        const errorCode = error.code;
        let errorMessage = error.message;
        const errorMsg = document.querySelector('#message-error');
        if (errorCode === 'auth/invalid-email') {
          errorMessage = 'Email inválido. Tente novamente';
          errorMsg.innerHTML = errorMessage;
        } else if (errorCode === 'auth/wrong-password') {
          errorMessage = 'Email ou senha incorreto. Tente novamente';
          errorMsg.innerHTML = errorMessage;
        } else {
          errorMessage = 'Usuário não cadastrado';
          errorMsg.innerHTML = errorMessage;
        }
        return error;
      });*/
  })

  // login com o google
  const btnGoogle = rootElement.querySelector('#btn-google');
  btnGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
     firebase.auth().signInWithRedirect(provider);
    loginWithGoogle()
      .then(() => {
       route("/feed")
      })
      .catch((error) => {
        const errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, erroMessage)
      });
  })
  // falta criar página de erro

 /* const btnLogin = rootElement.querySelector("#btn-login");
  btnLogin.addEventListener('click', (event) => { 
    event.preventDefault(); 
    const loginEmail = () => { 
      route("/feed");
    };
    loginEmail();
  });

  const btnGoogle = rootElement.querySelector("#btn-google");
   btnGoogle.addEventListener('click',(event)=>{
     event.preventDefault();
     const provider = new firebase.auth.GoogleAuthProvider();
     firebase.auth().signInWithRedirect(provider);
     const loginGoogle = () =>{
       route("/feed");
     };
     loginGoogle();
   })*/
   

  return rootElement;
};