import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
`

export const H1 = styled.h1`
    text-align: center;
`

export const Image = styled.img`
    margin-top: 30px;
    align-self: center;
    width: 20%;
    border-radius: 5px;
    box-shadow: 10px 10px coral;
    @media screen and (min-device-width : 320px) and (max-device-width : 800px) {
        width: 60%;
}   
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    column-gap: 10px;
    @media screen and (min-device-width : 320px) and (max-device-width : 800px) {
        width: 40%;
}
`