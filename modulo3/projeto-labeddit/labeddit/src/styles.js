import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`

export const Body = styled.div`
    min-height: 80vh;
    background-color: #D3D9DB;
`