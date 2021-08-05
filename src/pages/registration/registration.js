export const registration = () => {
    const rootElement = document.createElement("div");
    const container = `
      <div>
        <img id="background" src="./pages/login/img/paleta3.jpg" alt="">
        <div class="esmaeceHeader logotipo-text">
          <section>
          <h2>As Doceiras</h2>
        </section>
      </div>
        <h4>Não tem cadastro? <span><a href="/signup" id="signup">Cadastre-se</a></span></h4>
        <div class="inputAndReset">
        <input type="text" id="email" class="input" placeholder="Email">
        <input type="password" id="password" class="input" placeholder="Senha">
        <a class="reset-password" id="reset" href="/reset">Esqueceu a senha?</a><br>
      </div>
      <div class="google">
        <button id="btn-login" class="login btn">LOGIN</button>
        <img id="icon-google" src="./pages/login/img/icon-google-white.png">
      </div>
      <form>
        <input type="checkbox" class="checkbox" name="remember"><label for="remember">Lembrar meus dados</label>
      </form>
    
    </div> 
    `;
  
    rootElement.innerHTML = container;
    return rootElement; 
};