import React from "react";
// import styled from 'styledComponents'


export default class PerguntaMultipla extends React.Component {
        render() {
        return  (
            <select>
            {this.props.respostas.map((resposta) => {
                return <option>{resposta}</option>
            })}
            </select>
    )
    }
    
}

