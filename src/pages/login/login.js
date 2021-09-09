import { route } from "../../route.js";
import { loginWithEmail, loginWithGoogle } from "../../services/authentication.js";


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
  })

  // login com o google
  const btnGoogle = rootElement.querySelector('#btn-google');
  btnGoogle.addEventListener('click', () => {
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
  
  return rootElement;
};