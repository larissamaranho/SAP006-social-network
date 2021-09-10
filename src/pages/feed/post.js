import { likePost, getPost, unLikePost, editPost, deletePost } from '../../services/authentication.js';
export const viewPost = (data) => {
    const likeArray = data.data().like;
    const section = document.createElement("div");
    section.setAttribute("id", data.id);
    section.setAttribute("data-post", data.id);
    section.setAttribute("class", "class-post")
    const idPost = data.id;
    const idUser = firebase.auth().currentUser.uid;
    const textPost = data.data().post;
    const templateFeed = `
      <section>
        <div id="userName">${data.data().name}</div>
        <div id="userEmail">${data.data().email}</div>
        <div id="datePost">${data.data().data}</div>
      </section> 
      <textarea data-text="${data.id}" id="getPosts" disabled>${data.data().post}</textarea>
      <section id="containerButtons">
        <button data-like="${data.id}" id="${data.id}" class="btn-class1"><img src="../img/candy.png"></button>
        <span data-numberLike="${data.id}" id="numberLike">${data.data().like.length}</span>
        <button data-edit="${data.id}" id="${data.id}" class="btn-class">Editar</button>
        <button data-save="${data.id}" id="${data.id}" class="btnSave">Salvar</button>
        <button data-delete="${data.id}" id="${data.id}" class="btn-class">Excluir</button>
      </section>
      `;

    section.innerHTML += templateFeed;
  
    const listPost = section.querySelector('[data-post]');
    const likeButton = section.querySelector(`[data-like="${data.id}"]`);
    const textAreaPost = section.querySelector(`[data-text="${data.id}"]`);
    const btnSave = section.querySelector(`[data-save="${data.id}"]`);
    const btnEdit = section.querySelector(`[data-edit="${data.id}"]`);
    const btnDelete = section.querySelector(`[data-delete="${data.id}"]`);
  
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
    
    btnEdit.addEventListener('click', (e) => {
      textAreaPost.removeAttribute('disabled');
      btnSave.style.display = "block";
    })

    btnSave.addEventListener('click', (e) => {
      const newText = textAreaPost.value
      editPost(newText, idPost)
      .then(() => {
      textAreaPost.setAttribute('disabled', "")
      btnSave.style.display = "none";
      })
    })

    btnDelete.addEventListener('click', (e) => {
      deletePost(idPost)
      .then(() => {
        section.remove();
      })
    })

      return section
  };