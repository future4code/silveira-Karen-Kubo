import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../routes/Coordinator';
import {BASE_URL} from '../constants/Url'
import axios from 'axios';

const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if (token === null) {
      console.log("Não está logado!!!");
      navigate("/login");
    }
  }, [])
}

export const TripDetailsPage = () => {
  const navigate = useNavigate();
  useProtectedPage();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `${BASE_URL}trip/3bUbdB1gvPzWrThpazVC`,
        {
          headers: {
            auth: token
          }
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }, []);

  return (
    <div>TripDetailsPage
      <div>
        <button onClick={() => goBack(navigate)}>Voltar</button>
      </div>
    </div>
  )
}
