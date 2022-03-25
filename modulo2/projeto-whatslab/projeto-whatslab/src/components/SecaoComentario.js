import React, {Component} from 'react'
import styled from 'styled-components'

const Input = styled.input`
    height: 6vh;
`

const InputConteudo = styled.input`
    width: 30vw;
    height: 6vh;

`

const Container = styled.div`
    border: 7px solid black;
    border-radius: 7px;
    height: 10vh;
    margin: auto;
    width: 80vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;


`

const P = styled.p`
    font-size: 2vw;
    color: white;

`

const PMensagem = styled.p`
    font-size: 1vw;
    color: white;
    text-align: justify;
    padding: 3px;

`

const Mensagem = styled.div`
    background-image: linear-gradient(to right, #434343 0%, black 100%); 
    border: 1px solid black;
    border-radius: 7px;
    word-wrap: break-word;
    color: white;
    width: 50vw;
    margin-left: 5vw;
    margin-bottom: 2vw;
`

const CampoMensagens = styled.div`
    border: 3px solid black;
    min-height: 80vh;
    width: 80vw;
    border: 7px solid black;
    border-radius: 7px;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    display: flex;
    flex-direction: column-reverse;
    


`
const Botao = styled.button`
    width: 8vw;
    height: 6vh;

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
   
        const mensagens = this.state.mensagens.map((mensagem) => {
            return (           
                <Mensagem>
                    <PMensagem><strong> {mensagem.remetente}: </strong> {mensagem.conteudo} </PMensagem>
                </Mensagem>
               
            )
            })

        console.log(this.state.mensagens)

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

            <InputConteudo
				placeholder={'Conteúdo'}
				value={this.state.conteudo}
				onChange={this.onChangeConteudo}
			/>

			<Botao onClick={this.aoClicar} className='botao'>Enviar</Botao>
		</Container>
              </>
        )
	}
}