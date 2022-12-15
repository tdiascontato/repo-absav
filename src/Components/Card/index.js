import React from 'react'
import {Cartão} from './styles'
import {BsInstagram, BsWhatsapp} from 'react-icons/bs'
import imagem from "C:/Projeto/new-react-app/src/Assets/Ativo 14-8.png"

const Card = ({title, name, old, from}) => {
    return (
        <div>    
            <Cartão>
                <img
                src={imagem} 
                alt="Imagem"
                />
                <h1>{title}</h1>
                <h3>{name}</h3>
                <h3>{old}</h3>
                <h3>{from}</h3>
                <button>
                    <BsInstagram />
                </button>
                <button>    
                    <BsWhatsapp />
                </button>
            </Cartão>
        </div>
    )
}

export default Card;