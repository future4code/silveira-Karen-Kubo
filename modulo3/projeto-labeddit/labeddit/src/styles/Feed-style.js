import styled from "styled-components"

export const Icon = styled.img `
    width: 32px;
`
export const Card = styled.div `
    box-shadow: #FAB253 0px 0px 0px 4px, #FD7D1C 0px 0px 0px 8px;
    border-radius: 5px;
    word-wrap: break-word;
    background-color: white;
`
export const DivCards = styled.div `
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding-top: 20px;
    width: 320px;
    margin: auto;
`
export const DivBody = styled.div `
    display: flex;
    flex-direction: column;
    
`
export const Textarea = styled.textarea `
    width: 320px;
    min-height: 15vh;
    box-shadow: #D3D9DB 0px 0px 0px 4px, #47515A 0px 0px 0px 8px;
    border-radius: 5px;    
    word-wrap: break-word;
    white-space:normal;
    resize: none;
`

export const TextareaTitulo = styled.textarea `
    width: 320px;
    min-height: 5vh;
    box-shadow: #D3D9DB 0px 0px 0px 4px, #47515A 0px 0px 0px 8px;
    border-radius: 5px;    
    word-wrap: break-word;
    white-space:normal;
    resize: none;
`

export const DivForm = styled.div `
    display: flex;
    flex-direction: column;
    min-height: 30vh;
    justify-content: center;
`


export const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    word-wrap: break-word;
    margin: auto;
`

export const DivBotoesPosts = styled.div `
    display: flex;
    column-gap: 10px;

`

export const Icones = styled.button `
    background: none;
    border: none;
    cursor: pointer;
    padding-left: 10px;
`