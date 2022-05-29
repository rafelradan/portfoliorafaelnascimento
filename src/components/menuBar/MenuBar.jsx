import React from "react";
import './MenuBar.css'

export default function MenuBar(){
    return(
        <div id="menu-bar">
            <div className="menus">
                <ul>
                    <li>Home</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </ul>
            </div>

            <div className="button" >
                Enviar Mensagem
            </div>
        </div>

    )
}