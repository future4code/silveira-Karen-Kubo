import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPessoal from './img/img-pessoal.jpeg';
import ImgPhone from './img/phone-call.png';
import ImgEmail from './img/email.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemPessoal} 
          nome="Karen Kubo" 
          descricao="Oi, eu sou a Karen, tenho 22 anos e sou aluna da turma Silveira da Labenu."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno 
        imagememail={ImgEmail}
        email="karennckubo@gmail.com"
        imagemcel={ImgPhone}
        celular="19 99438-0962"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://feeta.com.br/wp-content/uploads/2015/04/logotipo_final_feeta-01.png" 
          nome="Estagiária RH - Feeta RH" 
          descricao="Atividades: Auxiliar o setor nas atividades de recrutamento e seleção através da divulgação de vagas, triagem de currículos, no desenvolvimento e elaboração de relatórios e perfis e controle de documentos para a empresa, contato com candidatos, elaboração de shortlist, mapeamento comercial, correção de provas, aplicação de testes, entrevistas, alinhamento de vagas, análise de vídeos para programas de estágio/trainee e condução de dinâmicas." 
        />
        
        <CardGrande 
          imagem="https://www.drcarlosmattos.com.br/wp-content/uploads/2020/03/logohmcp.jpg" 
          nome="Estagiária de psicologia clínica - Hospital PUC-Campinas" 
          descricao="Realização de atendimentos individuais na clínica, identificação de demandas, elaboração de um plano interventivo e confecção de relatórios." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>


    </div>

  );
}

export default App;
