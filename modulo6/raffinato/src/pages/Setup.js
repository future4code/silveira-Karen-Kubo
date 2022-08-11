import React, { useState } from "react";
import Inicio from "../assets/inicio.png";
import Metade from "../assets/metade.png";
import Fim from "../assets/fim.png";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ErrorMessage from "../components/ErrorMessage";
import { Div, Form, H1, Image } from "./Styled";
import { Button } from "@mui/material";
import Start from "../components/Start";

export default function Setup() {
  const [times, setTimes] = useState(0);
  const [position, setPosition] = useState(0);
  const [size, setSize] = useState(0);
  const [up, setUp] = useState(0);
  const [down, setDown] = useState(0);
  const [error, setError] = useState(false);
  const [square, setSquare] = useState(`none`);
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);

  function refreshPage() {
    window.location.reload(false);
  }

  function verify(event) {
    event.preventDefault();
    if (up < down || size <= 0 || up <= 0) {
      setSize(0);
      setUp(0);
      setDown(0);
      setError(true);
    } else {
      setStarted(true);
      loop(position, size, times, up, down);
    }
  }

  function loop(position, size, times, up, down) {
    setError(false);
    let half = Math.round(size / 2);
    times++;
    let newPosition = position;
    newPosition += up;
    setPosition(newPosition);
    if (newPosition > half) {
      setSquare(`yellow`);
    }
    if (newPosition > size) {
      setTimes(times);
      setSquare(`green`);
      setSize(0);
      setUp(0);
      setDown(0);
      setFinished(true);
      return times;
    } else {
      newPosition -= down;
      setPosition(newPosition);
      setTimeout(() => {
        loop(newPosition, size, times, up, down);
      }, 1000);
    }
  }

  function creatingSquares(square) {
    switch (square) {
      case `yellow`: {
        return <Image src={Metade} alt="Metade - quadrado amarelo" />;
      }
      case `green`: {
        return <Image src={Fim} alt="Fim - quadrado verde" />;
      }
      default: {
        return <Image src={Inicio} alt="Inicio - quadrado marrom" />;
      }
    }
  }

  return (
    <Div>
      {error && <ErrorMessage close={() => {setError(false)}}/>}

      {started && <Start close={()=> {setStarted(false)}}/>}

      {creatingSquares(square)}
      <Div>
        {times > 0 ? <H1>Tentativas: {times}</H1> : <H1>Tentativas: 0</H1>}
      </Div>

      <Form onSubmit={verify}>
        <Box sx={{ display: "flex", alignItems: "center", columnGap:"10px" }}>
          <label htmlFor="size">Informe a altura do buraco em centímetros: </label>
          <TextField
            variant="filled"
            name={"size"}
            min="0"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            type={"number"}
            placeholder="Size"
            required
            label={"size"}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", columnGap:"10px" }}>
          <label htmlFor="up">Informe quantos centímetros a minhoca irá subir: </label>
          <TextField
            variant="filled"
            name={"up"}
            min="0"
            value={up}
            onChange={(e) => setUp(Number(e.target.value))}
            type={"number"}
            placeholder="Up"
            required
            label={"up"}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", columnGap:"10px" }}>
          <label htmlFor="down">Informe quantos centímetros a minhoca irá cair: </label>
          <TextField
            variant="filled"
            name={"down"}
            min="0"
            value={down}
            onChange={(e) => setDown(Number(e.target.value))}
            type={"number"}
            placeholder="Down"
            required
            label={"down"}
          />
        </Box>
      {!finished ? <Button variant="contained" type="submit" color="success" sx={{marginTop:"10px"}}>
          Iniciar trajeto
        </Button> : <Button variant="contained" onClick={refreshPage} color="warning" sx={{marginTop:"10px"}}>
          Tentar de novo
        </Button>}
        
      </Form>
    </Div>
  )
}
