import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PizzaCards from "../../Components/PizzaCards";
import { goToLogin } from "../../Routes/coordinator";
import GlobalStateContext from './../../Global/GlobalStateContext';
import { CardsDiv, Main } from "./styled";

export const Feed = () => {
    const navigate = useNavigate();
    const { states, requests } = useContext(GlobalStateContext);
    const { getPizzas } = requests;
    const { pizzas } = states;

    const logout = () => {
        localStorage.removeItem("token");
        goToLogin(navigate);
    };

    useEffect(() => {
        localStorage.getItem("token") !== null ? getPizzas() : goToLogin(navigate)

    }, []);

    const allPizzas = pizzas && pizzas.map((pizza) => {
        return (
            <PizzaCards
                id={pizza.id}
                name={pizza.name}
                photo_link={pizza.photo_link}
                ingredients={pizza.ingredients}
                price={pizza.price}
            />
        )
    })

    return (
        <Main>
            <Button variant="contained" type="submit" onClick={logout}>Logout</Button>
            <CardsDiv>
                {allPizzas}
            </CardsDiv>
        </Main>
    )
}