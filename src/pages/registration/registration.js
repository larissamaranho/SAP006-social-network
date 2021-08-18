import { route } from "../../routes.js";

export const registration = () => {
    const rootElement = document.createElement("div");
    const container = `
      <img src="" alt="" class="logo">   
      <h2>Registre-se</h2>
      <form id="form-registration" class="form-registration">    
       
        <input type="email" id="cad-email" class="email" placeholder="E-mail"><br>
        <input type="password" id="cad-password" class="password" placeholder="Senha"><br>
        <button id="btn-registration" class="btn-register">CADASTRE-SE</button>
      </form>
      
      
      
      <hr>
      <h4>Ja tem cadastro? <span><a href="/login" id="login">Faça o login.</a></span></h4>
      <form>
        <input type="checkbox" class="checkbox" name="remember"><label for="remember">Lembrar meus dados</label>
      </form>
    `;
  
   rootElement.innerHTML = container;

    const formRegistration = rootElement.querySelector("#form-registration");
     formRegistration.addEventListener('submit', (e) => { 
     e.preventDefault(); 

     //pegar as info do usuario

     const email = formRegistration['cad-email'].value;
     const password = formRegistration['cad-password'].value;
     
     console.log(email,password)

     firebase
     .auth()
     .createUserWithEmailAndPassword(email, password)
     .then((userCredential) => {
       console.log(userCredential.user);

       // Signed in
       const user = userCredential.user;
       console.log('Deu bom');
       formRegistration.reset();
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       // ..
       console.log('Deu ruim', errorCode, errorMessage);
     });
     
     const Cadastro = () => { 
      route("/feed");
    };
    Cadastro(); 
  
  });
    return rootElement; 
};