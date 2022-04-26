import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goToApplicationForm, goBack } from '../routes/Coordinator';

export const ListTripsPage = () => {
  const navigate = useNavigate();

  return (
    <div>ListTripsPage
      <div>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToApplicationForm(navigate)}>Inscrever-se</button>
      </div>
    </div>
  )
}
