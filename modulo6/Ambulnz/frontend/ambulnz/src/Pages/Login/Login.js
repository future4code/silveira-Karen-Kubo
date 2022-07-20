import React from "react";
import { useNavigate } from "react-router-dom";
import { Main, Form } from "./styled";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useForm from "../../Hooks/useForm";
import axios from 'axios';
import {goToPizzas, goToSignUp} from "../../Routes/coordinator";
import { Button } from "@mui/material";
import { BASE_URL } from "../../Constants/BaseUrl";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const Login = () => {
    let navigate = useNavigate();

    const { form, InputChange } = useForm({
        email: "",
        password: ""
    })

    const MySwal = withReactContent(Swal);

    const login = (event) => {
        event.preventDefault();
        axios
          .post(`${BASE_URL}/user/login`, form)
          .then((res) => {
            localStorage.setItem('token', res.data)
            goToPizzas(navigate);
          })
          .catch((error) => {
            MySwal.fire({
                title: 'Erro',
                text: `${error.response.data.message}`,
                icon: 'error',
                confirmButtonText: 'Ok'
            });
          })
      };

    return (
        <Main>
            <Typography variant="h1" color={"primary"} sx={{ textShadow: "2px 2px 3px rgba(255,255,255,0.1)"}}>
                Entrar
            </Typography>
            <Form onSubmit={login}>
                <TextField id="filled-basic" label="E-mail" name={"email"}
                    type={"email"} variant="filled" color={"primary"} value={form.email}
                    onChange={InputChange} required margin={"normal"} />
                <TextField id="filled-basic" label="Password" name={"password"}
                    type={"password"} variant="filled" value={form.password}
                    onChange={InputChange} required margin={"normal"} />

                <Button variant="contained"
                color={"primary"}type="submit">Entrar</Button>
            </Form>
            <Button variant="contained" type="submit" style={{ width: "80%" }} onClick={() => goToSignUp(navigate)}>Cadastro</Button>
        </Main>
    )
}