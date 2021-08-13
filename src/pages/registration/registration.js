export const registration = () => {
    const rootElement = document.createElement("div");
    const container = `
      <div class="container">
        <section>
          <h2>As Doceiras</h2>
        </section>
        </div>
      
        <div class="label-float">
          <input type="text" id="nome" class="nome" placeholder="Nome">
        </div>
        <div class="label-float">
          <input type="text" id="sobrenome" class="sobrenome" placeholder="Sobrenome">
        </div>
        <div class="label-float">
          <input type="email" id="email" class="email" placeholder="E-mail">
        </div>
        <div class="label-float">
          <input type="password" id="password" class="input" placeholder="Senha">
        </div>
        <div class="label-float">
          <input type="password" id="password" class="input" placeholder="Confirme sua senha">
        </div>
      </div>
      <div class="justify-center">
        <button id="btn-register" class="login btn">CADASTRE-SE</button>
      </div>
      <div>
        <hr>
      </div>
      <h4>Ja tem cadastro? <span><a href="/login" id="login">Faça o login.</a></span></h4>
      <form>
        <input type="checkbox" class="checkbox" name="remember"><label for="remember">Lembrar meus dados</label>
      </form>
    
    </div> 
    `;
  
    rootElement.innerHTML = container;
    return rootElement; 
};