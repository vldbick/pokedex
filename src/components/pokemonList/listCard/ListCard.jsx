import React, { useState, useEffect } from 'react';
import s from './ListCard.module.css'
import PokemonClass from './pokemonClass/PokemonClass';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const ListCard = ({ url }) => {
    const [pokemonCard, setPokemonCard] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setPokemonCard(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchData();
    }, []);

    const hideAndSick = () => {
        const el = document.querySelector('#selectPokemon');
        el.style.display = 'block';
    }

    return (
        <NavLink to={'/' + pokemonCard.name} className={({ isActive }) => isActive ? s.activeCard : ''}>
            <div className={s.card} onClick={hideAndSick}>
                <div className={s.pokId}>
                    #{pokemonCard.id}
                </div>
                <div className={s.img}>
                    {pokemonCard.sprites && (
                        <img src={pokemonCard.sprites.front_default} alt="" />
                    )}
                </div>
                <div className={s.title}>
                    {pokemonCard.name}
                </div>
                <div className={s.types}>
                    {pokemonCard.types && (
                        pokemonCard.types.map((type) => {
                            return <PokemonClass key={type.type.name+type.type.slot} text={type.type.name}></PokemonClass>
                        })
                    )}
                </div>
            </div>
        </NavLink>

    );
}

export default ListCard;