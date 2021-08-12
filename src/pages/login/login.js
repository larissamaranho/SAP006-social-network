import { route } from "../../routes.js";

export const login = () => {
  const rootElement = document.createElement("div");
  const container = `
    <div>
      <img id="background" src="./pages/login/img/paleta3.jpg" alt="">
      <div class="esmaeceHeader logotipo-text">
        <section>
        <h2>As Doceiras</h2>
      </section>
    </div>
      <div class="inputAndReset">
      <input type="text" id="email" class="input" placeholder="Email">
      <input type="password" id="password" class="input" placeholder="Senha">
      <a class="reset-password" id="reset" href="/reset">Esqueceu a senha?</a><br>
    </div>
    <div class="google">
      <button id="btn-login" class="login btn">LOGIN</button>
    </div>
    <h4>Não tem cadastro? <span><a href="/registration" id="registration">Cadastre-se</a></span></h4>
    <div class="ou"> Ou </div>
    <h4>Faça o login com o <span><a href="/signup" id="signup">Google</a></span></h4>
    <form>
      <input type="checkbox" class="checkbox" name="remember"><label for="remember">Lembrar meus dados</label>
    </form>
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