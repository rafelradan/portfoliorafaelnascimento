import React from "react";
import './Left.css'
export default function LeftInHome(){

    function getWidth(){
        let widthDoc= window.outerWidth
        console.log(widthDoc)
        document.getElementById('left-side-in-home').classList.add('bigest')
    }
//////////////////////////////////////////
    if (window.outerWidth >= 500 +'px' ) {
        console.log('sim');
        let widthSim = window.outerWidth
        console.log('Sim' + widthSim);
       
    }else{
        console.log('nao');
        let widthSim = window.outerWidth
        console.log('Nao' + widthSim);
        
    }

    return(
        <div className="left-side-in-home" id="left-side-in-home">
            <img src="" alt="" />
            <p>Olá, seja bem vindo! Meu nome é Rafael sou desenvolvedor
                React e aqui vou mostrar alguns dos projetos que desenvolvi 
                usando ReactJS.
            </p>

            <button onClick={getWidth}>Try it</button>
        </div>
    )
}