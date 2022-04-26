import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToCreateTripPage, goToLogin, goToTripDetailsPage } from '../routes/Coordinator';

export const AdminHomePage = () => {
  const navigate = useNavigate();
  return (
    <div>AdminHomePage
      <div>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToCreateTripPage(navigate)}>Criar viagem</button>
        <button onClick={() => goToLogin(navigate)}>Logout</button>
        <button onClick={() => goToTripDetailsPage(navigate)}>Trip Details</button>
      </div>
    </div>
  )
}
