import { createPost, showPostFeed } from "../../services/authentication.js";
import { viewPost } from "./post.js";

export const feed = () => {
  console.log(firebase.auth().currentUser)
  const rootElement = document.createElement("div");
  const container = `
    <div class="container-feed">
    <nav class="nav-bar">
      <img class="logoPageFeed" src="./img/logo-nome.png" alt="logo">
      <h2 class="photo">Feed</h2>
      <button class="btn btn-logout" type="button" id="btn-logout"><i class="fas fa-sign-out-alt"></i></button>
    </nav>
    <section>
        <form class="form-post" id="container-post"> 
          <div class="post">
            <input type="text" id="nameUser">
            <textarea id="postText" type="textarea" class="new-post" placeholder="Novo Post"></textarea> 
            <img src="img/icone-img.png" class="img-photo" id="btn-photo" type="button">
            <button id="btnSendPost" type="submit" class="btn-publicar">Publicar</button>
          </div>
        </form>
      <ul id="postList" class="post-list" data-section></ul>
    </section>
  </div>
  `;

  rootElement.innerHTML = container;

  const postText = rootElement.querySelector('#postText');
  const sendPost = rootElement.querySelector('#btnSendPost');
  const nameUser = rootElement.querySelector('#nameUser');
  const showPost = rootElement.querySelector('#postList');

  const clearPost = () => {
    postText.value = '';
    nameUser.value = '';
  }

  /*função para mostrar os dados dos posts
  const viewPost = (data) => {
    const templateFeed = `
      <li data-post id="${data.id}">
      <section>
        <div id="userName">${data.data().name}</div>
        <div id="userEmail">${data.data().email}</div>
        <div id="datePost">${data.data().data}</div>
      </section> 
      <div id="getPosts">${data.data().post}</div>
      <button data-like id="like">LIKE</button>
      <span id="numberLike">${data.data().like.length}</span>
      </li>
      `;

    showPost.innerHTML += templateFeed;

    const listPost = rootElement.querySelector('[data-post]')
    console.log(listPost);
    //btnlike
    listPost.addEventListener('click', (e) => {
      console.log(e.target)
      const btnLike = rootElement.querySelector('[data-like]')
      if (e.target === btnLike) {
        btnLike.style.backgroundColor = "red"
      }
    })
  };*/

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
  
  //showPostFeed(viewPost);
  loadPost();

  return rootElement;
};