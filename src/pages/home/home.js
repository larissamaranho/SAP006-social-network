import { route } from "../../routes.js";
export const home = () => {
    const rootElement = document.createElement("div");
    const container = `
    
        <section>
        <h2>As Doceiras</h2>
      </section>
       <div class="home">
      <p>Bolo solado?</p><p> Não acerta o ponto do pudim?</p>
        <p>Com As Doceiras você encontra as melhores receitas feitas passo-a-passo para o sucesso do seu negócio.</p>
    </div>
    <div class="btn">
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