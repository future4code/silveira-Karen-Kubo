import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../routes/Coordinator';
import useProtectedPage from '../hooks/useProtectedPage';
import useForm from '../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../constants/Url';

export const CreateTripPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const planets = ["Mercúrio", "Vênus", "Terra", "Marte", "Jupiter", "Saturno", "Urano", "Netuno", "Plutão"]
  const { form, onChange, cleanFields } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })
  const token = localStorage.getItem("token");
  const headers = { headers: { auth: token } }
  const todaysDate = new Date().toISOString().slice(0, 10)
  const submit = (event) => {
    event.preventDefault();
    axios
      .post(
        `${BASE_URL}trips`, form, headers
      )
      .then((res) => {
        navigate("/admin/trips/list")
        alert(`Trip created successfully!`)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
      cleanFields();
  }
  return (
    <div>CreateTripPage
      <div>
        <button onClick={() => goBack(navigate)}>Voltar</button>
      </div>
      <form onSubmit={submit}>
        <input
          placeholder='Nome'
          name={'name'}
          value={form.name}
          onChange={onChange}
          required
          pattern={"^.{5,}"}
          title={"O nome deve conter no mínimo 5 caracteres"}
        />
        <select
          placeholder='Planeta'
          name={'planet'}
          value={form.planet}
          onChange={onChange}
          required>
            <option value={""}>Escolha um planeta</option>
            {planets.map((planet) => {
              return (
                <option key={planet}>{planet}</option>
              )
            })}
          </select>
        <input
          placeholder='Data'
          name={'date'}
          value={form.date}
          onChange={onChange}
          type="date"
          min={todaysDate}
          required
        />
        <input
          placeholder='Descrição'
          name={'description'}
          value={form.description}
          type={"text"}
          onChange={onChange}
          required
          pattern={"^.{20,}"}
          title={"A descrição deve conter no mínimo 30 caracteres"}
        />
        <input
          placeholder='Duração'
          name={'durationInDays'}
          value={form.durationInDays}
          onChange={onChange}
          required
          type={'number'}
          min={50}
          title={"A duração deve ter no mínimo 50 dias"}
        />
        <button type='submit'>Criar</button>
      </form>

    </div>
  )
}
