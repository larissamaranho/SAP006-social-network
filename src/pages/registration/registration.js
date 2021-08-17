export const registration = () => {
    const rootElement = document.createElement("div");
    const container = `
      <img src="" alt="" class="logo">   
      <h2>Registre-se</h2>
      <form class="form-registration" action="">    
        <input type="text" id="nome-sobrenome" class="nome-sobrenome" placeholder="Nome e Sobrenome"><br>
        <input type="email" id="email" class="email" placeholder="E-mail"><br>
        <input type="password" id="password" class="input" placeholder="Senha"><br>
        <input type="password" id="password" class="input" placeholder="Confirme sua senha"><br>
      </form>
      
      <button id="btn-register" class="btn-register">CADASTRE-SE</button>
      
      <hr>
      <h4>Ja tem cadastro? <span><a href="/login" id="login">Faça o login.</a></span></h4>
      <form>
        <input type="checkbox" class="checkbox" name="remember"><label for="remember">Lembrar meus dados</label>
      </form>
    `;
  
    rootElement.innerHTML = container;
    return rootElement; 
};