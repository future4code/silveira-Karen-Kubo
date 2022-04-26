import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../routes/Coordinator';

export const TripDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div>TripDetailsPage
      <div>
        <button onClick={() => goBack(navigate)}>Voltar</button>
      </div>
    </div>
  )
}
