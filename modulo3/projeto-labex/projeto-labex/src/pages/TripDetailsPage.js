import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goBack } from '../routes/Coordinator';
import {BASE_URL} from '../constants/Url'
import axios from 'axios';
import useProtectedPage from '../hooks/useProtectedPage';

export const TripDetailsPage = () => {
  const navigate = useNavigate();
  useProtectedPage();
  const token = localStorage.getItem("token");
  const headers = {headers:{auth:token}}
  const params = useParams();

  const [trip, setTrip] = useState({});
  const [candidates, setCandidates] = useState([]);
  const [approveds, setApproveds] = useState([]);

  // Pegando viagens
  const getTrip = () => {
    axios
    .get(`${BASE_URL}trip/${params.id}`, headers)
    .then((res) => {
      setTrip(res.data.trip)
      setCandidates(res.data.trip.candidates)
      setApproveds(res.data.trip.approved)
    })
    .catch((err) => {
      console.log(err.response)
    })
  };
  useEffect(() => {
    getTrip();
  }, []);

  const decideCandidate = (id, boolean) => {
    const body = {
      "approve": boolean
    }

    axios
    .put(`${BASE_URL}trips/${params.id}/candidates/${id}/decide`, body, headers)
    .then((res) => {
      getTrip()
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  const mapOfCandidates = candidates.map((candidate) => {
    return (
      <div key={candidate.id}>
        <p>Nome: {candidate.name}</p>
        <p>{candidate.applicationText}</p>
        <button onClick={() => decideCandidate(candidate.id, true)}>Approve</button>
        <button onClick={() => decideCandidate(candidate.id, false)}>Reprove</button>

      </div>
    )
  })

  const allApproved = approveds.map((approved) => {
    return (
      <div>
        <h3>{approved.name}</h3>
      </div>
    )
  })

  return (
    <div>Detalhes da viagem:
      <div>
        <button onClick={() => goBack(navigate)}>Voltar</button>
      </div>

      <div key={trip.id}>
        <p><strong>Nome: </strong>{trip.name}</p>
        <p><strong>Descrição: </strong>{trip.description}</p>
        <p><strong>Duração da viagem: </strong>{trip.durationInDays} dias</p>
        <p><strong>Data: </strong>{trip.date}</p>
      </div>
      <h3>Candidatos na lista de espera:</h3>
      {mapOfCandidates}
      <h3>Candidatos aprovados:</h3>
      {allApproved}
    </div>
  )
}
