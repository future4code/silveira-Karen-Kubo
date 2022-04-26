import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack } from '../routes/Coordinator';

export const ApplicationFormPage = () => {
  const navigate = useNavigate();

  return (
    <div>ApplicationFormPage
      <div>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => {}}>Enviar</button>
      </div>
    </div>
  )
}
