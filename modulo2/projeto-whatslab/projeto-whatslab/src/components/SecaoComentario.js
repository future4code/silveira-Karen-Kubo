import React, {Component} from 'react'
import styled from 'styled-components'

const Input = styled.input`

`

const Container = styled.div`
    border: 2px solid black;
    height: 10vh;
    display: flex;
    justify-content: center;

`

const P = styled.p`

`

const Mensagem = styled.div`
    background-color: lightblue;
`

const CampoMensagens = styled.div`
    border: 2px solid black;
    height: 90vh;
`


export class SecaoComentario extends Component {
	state = {
		conteudo: '',
        remetente: '',
        mensagens: []
	}

	onChangeConteudo = (event) => {
		this.setState({conteudo: event.target.value})
	}

    onChangeRemetente = (event) => {
        this.setState({remetente: event.target.value})
    }

    aoClicar = () => {
        const novaMensagem = {remetente: this.state.remetente, conteudo: this.state.conteudo};
        const novoArray = [... this.state.mensagens, novaMensagem];
        
        this.setState({mensagens: novoArray, conteudo: '', remetente: ''})

 
    }



    
	render() {
   
        const mensagens = this.state.mensagens.map(() => {
            return (           
                <Mensagem>
                    <P><strong> {this.state.mensagens.remetente}: </strong> {this.state.mensagens.conteudo} </P>
                </Mensagem>
               
            )
            })

		return (
            <>
            <CampoMensagens>
                {mensagens}
            </CampoMensagens>
           <Container>
            <P>WhatsLab</P>

            <Input
				placeholder={'Remetente'}
				value={this.state.remetente}
				onChange={this.onChangeRemetente}
			/>

            <Input
				placeholder={'Conteúdo'}
				value={this.state.conteudo}
				onChange={this.onChangeConteudo}
			/>

			<button onClick={this.aoClicar} className='botao'>Enviar</button>
		</Container>
              </>
        )
	}
}