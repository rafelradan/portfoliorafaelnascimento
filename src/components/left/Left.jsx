import React from "react";
import './Left.css'
export default function LeftInHome(){
        var width = window.outerWidth

        function getW(){
            console.log(width);
        }


    return(
        <div className="left-side-in-home" id="left-side-in-home">
            <img src="" alt="" />
            <p>Olá, seja bem-vindo ao meu Portfólio! Meu nome é Rafael Nascimento, sou 
                estudante de Analise e Desenvolvimento de Sistemas e desenvolvedor
                ReactJS. Aqui vou mostrar um pouco do meu conhecimento em projetos que desenvolvi 
                usando ReactJS.
            </p>
            <button onClick={getW}><a href="tel:85996384807"> Entre em contato</a></button>
           
        </div>
    )
}