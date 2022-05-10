import styled from 'styled-components'

export const Detalhes = styled.div`
    box-shadow: #D3D9DB 0px 0px 0px 4px, #47515A 0px 0px 0px 8px;
    width: 320px;
    margin: auto;
    word-wrap: break-word;
    border-radius: 5px;

  `

export const Comentarios = styled.div`
    box-shadow: #D3D9DB 0px 0px 0px 4px, #47515A 0px 0px 0px 8px;
    width: 320px;
    margin: auto;
    word-wrap: break-word;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  `

export const DivForm = styled.div `
    display: flex;
    flex-direction: column;
    min-height: 30vh;
    justify-content: center;
`

export const Textarea = styled.textarea `
    width: 320px;
    min-height: 20vh;
    box-shadow: #D3D9DB 0px 0px 0px 4px, #47515A 0px 0px 0px 8px;
    border-radius: 5px;    
    word-wrap: break-word;
    white-space:normal;
    resize: none;
`

export const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    word-wrap: break-word;
    margin: auto;
`

export const DivBody = styled.div `
    display: flex;
    flex-direction: column;
    
`

export const DivBotoes = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`