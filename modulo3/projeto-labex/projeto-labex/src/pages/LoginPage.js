import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goBack, goToAdminHomePage, goToHomePage } from '../routes/Coordinator';
import axios from 'axios';
import { BASE_URL } from '../constants/Url'
import useForm from '../hooks/useForm'

const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token !== null) {
      navigate("/admin/trips/list");
    }
  }, [])
}

export const LoginPage = () => {
  const navigate = useNavigate();
  useProtectedPage()
  const {form, onChange, cleanFields} = useForm({email: "", password: ""})

  const submit = (event) => {
    event.preventDefault();

    axios
      .post(
        `${BASE_URL}login`, form
      )
      .then((res) => {
        console.log(res.data.token)
        localStorage.setItem("token", res.data.token)
        navigate("/admin/trips/list")
      })
      .catch((err) => {
        console.log(`${err}`)
      })
      cleanFields();
  }

  return (
    <div>LoginPage
      <div>
        <button onClick={() => goToHomePage(navigate)}>Voltar</button>

      </div>
      <form onSubmit={submit}>
        <input name='email' placeholder='E-mail' type={"email"} value={form.email} onChange={onChange} required />
        <input name='password' placeholder='Senha' type={"password"} value={form.password} onChange={onChange} required pattern={"^.{3,}"} title={"Sua senha deve ter no mínimo 3 caracteres"}/>
        <button>Enviar</button>
      </form>
    </div>
  )
}
