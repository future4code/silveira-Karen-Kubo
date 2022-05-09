import React from 'react'
import { useForm } from "../hooks/useForm"
import { goToSignUp, goToFeed } from "../routes/Coordinator"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {BASE_URL} from "../constants/urls"

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
    <div>
      <form onSubmit={login}>
        <input
          placeholder="E-mail"
          type={"email"}
          required
          onChange={onChange}
          value={form.email}
          name={"email"}
        />
        <input
          placeholder="Senha"
          type={"password"}
          required
          onChange={onChange}
          value={form.password}
          name={"password"}
        />
        <button>Entrar</button>
      </form>
      <button onClick={()=>goToSignUp(navigate)}>Criar conta</button>
      </div>
    </>
  )
}
