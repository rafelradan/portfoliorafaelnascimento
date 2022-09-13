import React from "react";

import './About.css'

import Programmer from '../../assets/Programmer01.png'
import ImgLinkedIn from '../../assets/ImgLinkedIn.png'
import ImgGitHub from '../../assets/ImgGitHub.png'

import ImgHtml from '../../assets/HTML501.png'
import ImgCss from '../../assets/CSS01.png'
import ImgJs from '../../assets/JavaScript01.png'
import ImgReactJs from '../../assets/ReactJS.png'

export default function About(){
    return(
        <div className="about">
           <div className="content">
                <div className="img-content"> 
                    <img src={Programmer} />
                </div>
                <div className="aboutme">
                    <h2>Sobre mim</h2>
                    <p>Sou um Dev dedicado, comprometido e que gosta muito de 
                        estudar, amo desafios e me superar a cada dia. Gosto
                        de programação, inglês e também de praticar esportes.
                    </p>
                    <div className="social-media">
                        <a className="social-media-link" href="https://www.linkedin.com/in/rafael-nascimento-a110a9103/" target={"_blank"}><img src={ImgLinkedIn} /></a>
                        <a className="social-media-link" href="https://github.com/rafelradan" target={"_blank"}><img src={ImgGitHub} /></a>
                    </div>
                </div>
           </div>
           <div className="stacks">
                    <div className="title">
                        <h3>Tecnologias</h3>
                    </div>
                    <div className="tecnologies">
                        <img className="imgTec" src={ImgHtml} />
                        <img className="imgTec" src={ImgCss} />
                        <img className="imgTec" src={ImgJs} />
                        <img className="imgTec" src={ImgReactJs} />
                    </div>
                    <p>Essas são as tecnologias em que eu tenho
                        conhecimento e que utilizei para desenvolver 
                        alguns projetos.
                    </p>
                </div>
        </div>
    )
}