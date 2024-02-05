import React from 'react'
import s from './PokemonClass.module.css'

const PokemonClass = ({text}) => {
    const type = text.toLowerCase();
    
    return (
        <div className={s.usually + ' ' + type}>{text}</div>
    );
}

export default PokemonClass;