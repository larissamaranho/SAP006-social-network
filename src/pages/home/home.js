import { route } from "../../routes.js";
export const home = () => {
    const rootElement = document.createElement("div");
    const container = `
    <div>
      <img id="background" src="./pages/login/img/paleta3.jpg" alt="">
      <div class="esmaeceHeader logotipo-text">
        <section>
        <h2>As Doceiras</h2>
      </section>
    </div>
    <div>
      <p>Bolo solado? Não acerta o ponto do pudim?</p>
        <p>Com As Doceiras você encontra as melhores receitas feitas passo-a-passo para o sucesso do seu negócio.</p>
    </div> 
    <button id="btn-start" class="btn-start">Vamos começar!</button>
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