import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goBack, goToAdminHomePage } from '../routes/Coordinator';
import axios from 'axios';
import {BASE_URL} from '../constants/Url'

const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if (token !== null) {
      navigate("/admin/trips/list");
    }
  }, [])
}

export const LoginPage = () => {
  const navigate = useNavigate();
  useProtectedPage()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }
  const submit = (e) => {
    const body = {
      email: email,
      password: password
    };

    axios
    .post(
      `${BASE_URL}login`, body
    )
    .then((res) => {
      console.log(res.data.token)
      localStorage.setItem("token", res.data.token)
      navigate("/admin/trips/list")
    })
    .catch((err) => {
      console.log(`${err}`)
    })
  }
  return (
    <div>LoginPage
      <div>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      {/* <button onClick={() => goToAdminHomePage(navigate)}>Entrar</button> */}
      </div>
      <input placeholder='E-mail' type={"email"} value={email} onChange={onChangeEmail}/>
      <input placeholder='Senha' type={"password"} value={password} onChange={onChangePassword}/>
      <button onClick={submit}>Enviar</button>
    </div>
  )
}
