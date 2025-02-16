import { route } from "../../route.js";
export const home = () => {
    const rootElement = document.createElement("div");
    const container = `
    <header class="img-home">
      <img class="logoDoce" src="./img/logo-home-1.png">
      <section>
        <h2>As Doceiras</h2>
      </section>
    </header>
       <div class="text-home">
        <p>Bolo solado?</p><p>Não acerta o ponto do pudim?</p>
        <p>Com As Doceiras você encontra as melhores receitas feitas passo-a-passo para o sucesso do seu negócio.</p>
      </div>
    <div class="btn-home">
      <button id="btn-start" class="btn-start">Vamos começar!</button>
    </div>
    `;

    rootElement.innerHTML = container;
    const btnStart = rootElement.querySelector("#btn-start")

btnStart.addEventListener('click', (event) => { 
  event.preventDefault(); 
  const loginStart = () => { 
    route("/login");
  };
  loginStart();
});


  return rootElement;
}