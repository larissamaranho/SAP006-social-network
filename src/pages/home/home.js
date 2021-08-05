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
    <button class="btn-start">Vamos começar!</button>
    `;

    rootElement.innerHTML = container;
    return rootElement;
};

