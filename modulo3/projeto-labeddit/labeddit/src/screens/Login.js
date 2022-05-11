import React from 'react'
import { useForm } from "../hooks/useForm"
import { goToSignUp, goToFeed } from "../routes/Coordinator"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {BASE_URL} from "../constants/urls"
import { Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BodyLogin } from '../styles/Login-style';

export default function Login() {

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    axios
    .post(`${BASE_URL}/users/login`, form)
    .then((res) => {
      window.localStorage.setItem("token", res.data.token);
      goToFeed(navigate);
      cleanFields();
    })
    .catch((err) => {
      alert(err);
    })
  }

  return (
    <>
    <BodyLogin>
      <Form onSubmit={login} style={{width: "320px", display: "flex", flexDirection: "column", rowGap: "10px", marginBottom: "10px"}}>
        <Form.Group>
          <Form.Label>E-mail: </Form.Label>
        <Form.Control
          placeholder="E-mail"
          type={"email"}
          required
          onChange={onChange}
          value={form.email}
          name={"email"}
        />
        </Form.Group>
        <Form.Group>
        <Form.Label>Senha: </Form.Label>
        <Form.Control
          placeholder="Senha"
          type={"password"}
          required
          onChange={onChange}
          value={form.password}
          name={"password"}
        />
        </Form.Group>
        <Button variant='dark' type='submit'>Entrar</Button>
      </Form>
      <Button variant='dark' onClick={()=>goToSignUp(navigate)} style={{width: "320px"}}>Criar conta</Button>
      </BodyLogin>
    </>
  )
}
