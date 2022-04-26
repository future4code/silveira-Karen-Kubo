import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToListTripsPage, goToLogin } from '../routes/Coordinator';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>HomePage
      <div>
        <button onClick={() => goToLogin(navigate)}>Login</button>
        <button onClick={() => goToListTripsPage(navigate)}>Viagens</button>
      </div>
    </div>
  )
}
