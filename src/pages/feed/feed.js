import { createPost, showPostFeed, signOut } from "../../services/authentication.js";
import { route } from "../../route.js";
import { viewPost } from "./post.js";

export const feed = () => {
  console.log(firebase.auth().currentUser)
  const rootElement = document.createElement("div");
  const container = `
    <div class="container-feed">
    <nav class="nav-bar">
      <img class="logoPageFeed" src="./img/logo-nome.png" alt="logo">
      <h2 class="photo">Feed</h2>
      <div class="div-logout">
        <button class="btn-logout" type="button" id="btnLogout">Sair</button>
      </div>
    </nav>
    <section>
        <form class="form-post" id="container-post"> 
          <div class="post">
            <input type="text" id="nameUser"><br>
            <textarea id="postText" type="textarea" class="new-post" placeholder="Novo Post"></textarea> 
            <button id="btnSendPost" type="submit" class="btn-publicar">Publicar</button>
          </div>
        </form>
      <div id="postList" class="post-list" data-section></div>
    </section>
  </div>
  `;

  rootElement.innerHTML = container;

  const postText = rootElement.querySelector('#postText');
  const sendPost = rootElement.querySelector('#btnSendPost');
  const nameUser = rootElement.querySelector('#nameUser');
  const showPost = rootElement.querySelector('#postList');
  const btnLogout = rootElement.querySelector('#btnLogout');

  const clearPost = () => {
    postText.value = '';
    nameUser.value = '';
  }

  function loadPost() {
    showPostFeed().then((snapshot) => {
      snapshot.forEach((post) => {
        const print = viewPost(post)
        showPost.append(print)
      })
    })
  }

  sendPost.addEventListener('click', (e) => {
    e.preventDefault();
    const posts = postText.value;
    const name = nameUser.value;
    createPost(posts, name)
    clearPost();
    showPost.innerHTML = "";
    loadPost();
  });

  btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    signOut().then(() => route('/login'))
      .catch(() => {
        error('Tente novamente.');
      });
  });




  
  //showPostFeed(viewPost);
  loadPost();


  return rootElement;
};