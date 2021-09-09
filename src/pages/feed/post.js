import { likePost, getPost, unLikePost } from '../../services/authentication.js';
export const viewPost = (data) => {
    const likeArray = data.data().like;
    const section = document.createElement("li");
    section.setAttribute("id", data.id);
    section.setAttribute("data-post", data.id);
    const idPost = data.id;
    const idUser = firebase.auth().currentUser.uid;
    const templateFeed = `
      <section>
        <div id="userName">${data.data().name}</div>
        <div id="userEmail">${data.data().email}</div>
        <div id="datePost">${data.data().data}</div>
      </section> 
      <div id="getPosts">${data.data().post}</div>
      <button data-like="${data.id}" id="${data.id}">LIKE</button>
      <span data-numberLike="${data.id}" id="numberLike">${data.data().like.length}</span>
      <button data-remove="${data.id}" id="${data.id}">Deletar</button>
      <button data-edit="${data.id}" id="${data.id}">Editar</button>
    
      `;

    section.innerHTML += templateFeed;
  
    const listPost = section.querySelector('[data-post]')
    
    const likeButton = section.querySelector(`[data-like="${data.id}"]`)
    console.log(likeButton)
    likeButton.addEventListener('click',(e) => {
      const likeCount = section.querySelector(`[data-numberLike="${data.id}"]`)
      const numberLike = Number(likeCount.innerText)
      
      console.log(e)
      if (!likeArray.includes(idUser)){
        console.log(data.data().like)
        likePost(idUser, idPost)
        .then(() => {
          likeArray.push(idUser)
          likeCount.innerHTML = numberLike + 1;
          likeButton.style.backgroundColor = "red";
        })
      }  
      else {
        unLikePost (idUser, idPost)
        .then(() => {
          const likeIndex = likeArray.indexOf(idUser);
          likeArray.splice(likeIndex, 1);
          likeCount.innerHTML = numberLike - 1;
          likeButton.style.backgroundColor = "green";
        })
      }
    })







    //btnlike
    /*section.addEventListener('click', (e) => {
      const { target } = e;
      const btnLike = target.dataset.like;
      console.log(btnLike)
      if (e.target === btnLike) {
      const numberLike = section.querySelector(`[data-numberLike="${data.id}"]`);
      console.log(numberLike.innerText)
      btnLike.style.backgroundColor = "red";
      sendLike(idPost, idUser, numberLike);
      }
    })
  };

  function sendLike(idPost, idUser, numberLike) {
    const likeCount = Number(numberLike.innerText);
    console.log(likeCount);
      getPost(idPost).then((post) => {
            if (!post.data().like.includes(idUser)){
            likePost(idUser, idPost)
            .then(() => {
              numberLike.innerHTML = likeCount + 1;
            })
          }
      }) */
      return section
  };