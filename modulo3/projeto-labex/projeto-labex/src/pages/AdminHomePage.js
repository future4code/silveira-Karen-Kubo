import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../constants/Url';
import { goBack, goToCreateTripPage, goToHomePage, goToLogin, goToTripDetailsPage } from '../routes/Coordinator';
import useProtectedPage from '../hooks/useProtectedPage'

export const AdminHomePage = () => {
  const navigate = useNavigate();
  useProtectedPage();
  const token = localStorage.getItem("token");
  const headers = {headers:{auth:token}}
  // Array de viagens
  const [trips, setTrips] = useState([]);
  
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  // Pegando viagens
  const getAllTrips = () => {
    axios
    .get(`${BASE_URL}trips`, headers)
    .then((res) => {
      setTrips(res.data.trips)
    })
    .catch((err) => {
      console.log(err.response)
    })
  };
  useEffect(() => {
    getAllTrips();
  }, []);

  // Removendo viagens
  const removeATrip = (id) => {
    axios
    .delete(`${BASE_URL}trips/${id}`, headers)
    .then((res) => {
      getAllTrips();
    })
    .catch((err) => {
      alert(err.response);
    }) 
  }

  const allTrips = trips.map((trip) => {
    return(
      <div key={trip.id}>
        <p><strong>Nome:</strong> {trip.name}</p>
        <button onClick={() => goToTripDetailsPage(navigate, trip.id)}>Details</button>
        <button onClick={()=>removeATrip(trip.id)}>Remove</button>
      </div>
    )
  })

  return (
    <div>AdminHomePage
      <div>
        <button onClick={() => goToHomePage(navigate)}>Voltar</button>
        <button onClick={() => goToCreateTripPage(navigate)}>Criar viagem</button>
        <button onClick={logout}>Logout</button>
      </div>
      <div>
        {allTrips}
      </div>
    </div>
  )
}
