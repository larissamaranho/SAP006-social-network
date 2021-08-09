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
        
        <div class="inputAndReset">
        <input type="text" id="nome" class="nome" placeholder="Nome">
        <input type="text" id="sobrenome" class="sobrenome" placeholder="Sobrenome">
        <input type="email" id="email" class="email" placeholder="E-mail">
        <input type="password" id="password" class="input" placeholder="Senha">
        <input type="password" id="password" class="input" placeholder="Confirme sua senha">
        <h4>Ja tem cadastro? <span><a href="/signup" id="signup">Faça o login</a></span></h4>
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