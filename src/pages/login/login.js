import { route } from "../../routes.js";

export const login = () => {
  const rootElement = document.createElement("div");
  const container = `
    <header class="img-login">
      <img class="logo-cel" src="./img/logo-login.png">
    </header>  
    <div>
    <h2>As Doceiras</h2>
    </div>
    <form class="container-login" action="">
      <input type="text" id="email" class="input" placeholder="Email"><br>
      <input type="password" id="password" class="input" placeholder="Senha"><br>
      <a class="reset-password" id="reset" href="/reset">Esqueceu a senha?</a><br>
    </form>
    <form class="checkbox-login">
      <input type="checkbox"name="remember"><label for="remember">Lembrar meus dados</label>
    </form>
    <div class="container-login">
      <button id="btn-login" class="login btn">ENTRAR</button>
    </div>
    <hr>
    <h4>Não tem cadastro? <span><a href="/registration" id="registration">Cadastre-se</a></span></h4>
    <div class="ou"> Ou </div>
    <h4>Faça o login com o <span><a href="/signup" id="signup">Google</a></span></h4>

  </div> 
  `;

  rootElement.innerHTML = container;
  
  const btnLogin = rootElement.querySelector("#btn-login");
  btnLogin.addEventListener('click', (event) => { 
    event.preventDefault(); 
    const loginEmail = () => { 
      route("/feed");
    };
    loginEmail();
  });
  /*const btnGoogle = rootElement.querySelector("#icon-google");
  const email = rootElement.querySelector('#email');
  const password = rootElement.querySelector('#password');
  const checkbox = rootElement.querySelector('.checkbox');
  const signUpBtn = rootElement.querySelector('#signup');
  
  signUpBtn.addEventListener('click', (event) => {
  event.preventDefault();
  window.history.pushState({}, null, '/signup')
  
  const popStateEvent = new PopStateEvent("popstate", {state:{}})
  dispatchEvent(popStateEvent)
  });
  
  const loginWithEmail = btnLogin.addEventListener("click", () => {
  signInEmailPassword(email.value, password.value);
  window.history.pushState({}, null, '/feed')
  });
  
  const loginWithGoogle = btnGoogle.addEventListener("click", () => {
  signInGoogle();
  });
  
  checkbox.addEventListener("change", () => {
  const none = firebase.auth.Auth.Persistence.NONE
  const local = firebase.auth.Auth.Persistence.LOCAL

if (checkbox.checked === true && loginWithGoogle) {
keepLogged(local)
} else if (checkbox.checked === true && loginWithEmail) {
keepLogged(local)
}
keepLogged(none)
});

const resetLink = rootElement.querySelector('#reset');
resetLink.addEventListener("click", (event) => {
event.preventDefault();
navigation('/reset');
})*/

return rootElement; 
};