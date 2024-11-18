import React from "react";
import { Link } from "react-router-dom";

function Projects() {
    return (
      <div className="section">
        <h2>Projetos:</h2>
        <p>Verifique meus projetos no <a href="https://github.com/rayannebelanger" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        <ul>
          <li><a href="https://github.com/Bruno-Guilherme/spa-weparty" target="_blank" rel="noopener noreferrer">Projeto WeParty</a> - Desenvolvimento de um site completo do WeParty, um site que conecta contratantes de serviços ou produtos para eventos diretamente com os fornecedores.</li>
          <li><a href="https://github.com/rayannebelanger/jogodados" target="_blank" rel="noopener noreferrer">Projeto de jogo de dados</a> - Desenvolvimento de um jogo de dados utilizando React.</li>
          <br />
          <h2>Jogo solicitado pelo professor abaixo:</h2>
          <li>
          <Link to="/game" className="project-link">
            Jogo Senha
          </Link>
          - Desenvolvimento de um jogo Senha utilizado para advinhar os valores.
        </li>
        </ul>
      </div>
    );
  }
  
  export default Projects;