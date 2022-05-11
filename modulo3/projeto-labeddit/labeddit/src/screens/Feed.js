import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { goToLogin } from '../routes/Coordinator';
import GlobalStateContext from '../global/GlobalStateContext'
import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { useForm } from "../hooks/useForm"
import PostCards from '../components/PostCards';
import { DivBody, DivCards, DivForm, StyledForm, Textarea, TextareaTitulo } from '../styles/Feed-style';
import Loading from "../assets/Loading.gif"
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Feed() {

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    goToLogin(navigate);
  }
  //Criando post
  const { form, onChange, cleanFields } = useForm({
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
  const { headers } = values


  const listOfPosts = posts.map((post) => {
    return (
      <PostCards
        post={post}
      />
    )
  })

  return (
    <DivBody>
      <Button variant='dark' onClick={logout} style={{ alignSelf: "center"}}>Logout</Button>
      <DivForm> 
        <StyledForm onSubmit={createPost} style={{ width: "320px" }}>          
            <label htmlFor='title'>Titulo:</label>
            <TextareaTitulo
              aria-multiline='true'
              name='title'
              placeholder='Titulo'
              type={"text"}
              onChange={onChange}
              value={form.title}
              required
            />
            <label>Post:</label>
            <Textarea
              name='body'
              placeholder="Escreva seu post"
              type={"text"}
              onChange={onChange}
              required
              value={form.body}
            />
          <Button variant='dark' type="submit">Postar</Button>
        </StyledForm>
      </DivForm>

      <DivCards>
        {listOfPosts.length > 0 ? listOfPosts : <img src={Loading} alt="Loading" />}
      </DivCards>
    </DivBody>
  )
}
