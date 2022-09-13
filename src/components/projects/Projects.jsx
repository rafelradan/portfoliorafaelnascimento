import React from "react";

import './Projects.css'

import ProjDevmidea from '../../assets/ProjDevmedia.png';
import ProjFilmaria from '../../assets/ProjFilmaria.png';
import ProjCaduser from '../../assets/ProjCaduser.png';
import ProjPortfolio from '../../assets/ProjPortfolio1.0.png';



export default function Projects() {
    return(
        <div className="projects">
            <div className="contentProjects">
              <h2>Projetos</h2>
              <div className="cards">

                <div className="card">
                    <div className="cardContent">
                        <div className="cardImg">
                          <img src={ProjDevmidea} />
                        </div>
                        <h3>Desafio DevMedia</h3>
                        <p>Esse é um projeto apenas Front-end, 
                          foi uma prova que a DevMedia lançou, 
                          eu vi o vídeo no YouTube, tirei um print 
                          da tela e resolvi tentar fazer. Esse é 
                          o resultado, um Front-end responsivo. 
                          Projeto muito bom para treino de HTML e CSS.</p>
                    </div>
                    <button> 
                      <a
                      href="https://devmediatest.netlify.app/"
                      target="_blank"
                      rel="noreferrer">
                      Acessar
                      </a>
                    </button>
                </div>

                <div className="card">
                    <div className="cardContent">
                        <div className="cardImg">
                          <img src={ProjFilmaria} />
                        </div>
                        <h3>Filmaria</h3>
                        <p>Esse é um projeto também desenvolvido 
                          em React e totalmente responsivo, nesse 
                          caso o projeto consome uma API sobre filmes, 
                          acessando Nome, Capa e Sinopse do filme. 
                          O site tem três rotas, a Home, Favoritos e 
                          uma para pesquisar por filmes no YouTube.</p>
                    </div>
                    <button> 
                      <a
                      href="https://filmariard.netlify.app/"
                      target="_blank"
                      rel="noreferrer">
                      Acessar
                      </a>
                    </button>
                </div>
                
                <div className="card">
                    <div className="cardContent">
                        <div className="cardImg">
                          <img src={ProjCaduser} />
                        </div>
                        <h3>CadUser</h3>
                        <p>Esse é um CRUD completo, com Front-end 
                          e Back-end desenvolvido com ajuda de um amigo 
                          meu, Gleyson Carvalo. Foi meu primeiro projeto, 
                          foi utilizando formulários, tabelas e listagem 
                          para treinar. Nele você pode cadastrar, editar, 
                          atualizar e excluir usuários.</p>
                    </div>
                    <button> 
                      <a
                      href="https://pensive-benz-f7f7da.netlify.app/"
                      target="_blank"
                      rel="noreferrer">
                      Acessar
                      </a>
                    </button>
                </div>
                
                <div className="card">
                    <div className="cardContent">
                        <div className="cardImg">
                         <img src={ProjPortfolio} />
                        </div>
                        <h3>Portfólio</h3>
                        <p>Essa foi a primeira versão do meu Portfólio, projeto Front-end 
                          criado usando React. Aqui estão alguns dos 
                          projetos desenvolvidos por mim. Meu foco 
                          principal é Front-end.</p>
                    </div>
                    <button> 
                      <a
                      href="https://rafaelnascimento.netlify.app/"
                      target="_blank"
                      rel="noreferrer">
                      Acessar
                      </a>
                    </button>
                </div>
              </div>
            </div>
        </div>
    )
}