import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goToApplicationForm, goBack } from '../routes/Coordinator';
import { useGetData } from '../hooks/useGetData'
import { BASE_URL } from '../constants/Url';
import styled from 'styled-components'

const Card = styled.div `
    width: 320px;
    margin: auto;
    word-wrap: break-word;
    background-color: #F4E7EE;
    margin: 0, 5px;

`
export const ListTripsPage = () => {
  const navigate = useNavigate();

  const [trips, isLoading, error] = useGetData(`${BASE_URL}trips`)

    const mapOfTrips = trips && trips.trips.map((trip) => {
      return (
        <Card key={trip.id}>
          <p><strong>Nome: </strong> {trip.name}</p>
          <p><strong>Planeta: </strong>{trip.planet}</p>
          <p><strong>Data: </strong>{trip.date}</p>
          <p><strong>Duração: </strong>{trip.durationInDays} dias</p>
          <p><strong>Descrição: </strong>{trip.description}</p>

        </Card>
      )
    })
    
  return (
    <div>ListTripsPage
      <div>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToApplicationForm(navigate)}>Inscrever-se</button>
      </div>
      <div>
      {isLoading && <p>Carregando</p>}
      {!isLoading && error && <p>Recarregue a página</p>}
      {!isLoading && trips && mapOfTrips}
      {!isLoading && trips && mapOfTrips.length === 0 && <p>Não há viagens disponíveis!</p>}
      </div>
      
    </div>
  )
}
