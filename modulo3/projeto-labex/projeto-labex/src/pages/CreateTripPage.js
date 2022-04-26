import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../routes/Coordinator';

export const CreateTripPage = () => {
  const navigate = useNavigate();
  return (
    <div>CreateTripPage
      <div>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => {}}>Criar</button>
      </div>

    </div>
  )
}
