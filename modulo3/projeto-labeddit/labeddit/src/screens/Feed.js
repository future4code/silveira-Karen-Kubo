import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { goToLogin, goToPost } from '../routes/Coordinator';
import GlobalStateContext from '../global/GlobalStateContext'
import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import {useForm} from "../hooks/useForm"
import Like from "../assets/like.png"
import Dislike from "../assets/dislike.png"
import Comments from "../assets/comments.png"
import { Icon } from '../styles/Feed-style';
export default function Feed() {
  
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    goToLogin(navigate);
  }
  //Criando post
  const {form, onChange, cleanFields} = useForm({
    title: "",
    body: ""
  })

  const createPost = (event) => {
    event.preventDefault();
    axios
    .post(`${BASE_URL}/posts`, form, headers)
    .then((res) => {
      alert(`Post adicionado com sucesso`)
      cleanFields();
    })
    .catch((err) => {
      alert(err)
    })
  }

  //Listando posts  
  const { states, values } = useContext(GlobalStateContext);
  const { posts } = states
  const { token, headers } = values
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  
  const listOfPosts = posts.map((post) => {
    return (
      <div key={post.id} onClick={()=>goToPost(navigate,post.id)}>
        <span>Enviado por: {post.username}</span>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button><Icon src={Like} alt="like"/></button>
        <span>{post.voteSum}</span>
        <button><Icon src={Dislike} alt="dislike"/></button>
        <div>
          <button><Icon src={Comments} alt="comments"/></button>
          {post.commentCount > 1 ? <span>{post.commentCount} comentários</span> : <span>{post.commentCount} comentário</span>} 
        </div>
      </div>
    )
  })

  return (
    <>
      <button onClick={logout}>Logout</button>
      <div>
        <form onSubmit={createPost}>
          <input
          name='title'
          placeholder='Titulo'
          type={"text"}
          onChange={onChange}
          value={form.title}
          required
          />
          <input
            name='body'
            placeholder="Escreva seu post"
            type={"text"}
            onChange={onChange}
            required
            value={form.body}
          />
          <button>Postar</button>
        </form>
      </div>

      <div>
        {listOfPosts}
      </div>
    </>
  )
}
