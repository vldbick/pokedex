import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import s from './SelectCard.module.css'
import PokemonClass from '../../pokemonList/listCard/pokemonClass/PokemonClass';

const SelectCard = () => {
    const { pokemon } = useParams();

    const [selectCard, setSelectCard] = useState([]);
    const API = 'https://pokeapi.co/api/v2/pokemon'


    useEffect(() => {
        const fetchData = async (url) => {
            try {
                const response = await axios.get(url);
                setSelectCard(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchData(API + '/' + pokemon);
    }, [pokemon]);

    return (
        <div className={s.card}>
            <div className={s.name}>{selectCard.name && (
                selectCard.name
            )}</div>
            <div className={s.decor}></div>
            <div className={s.cardFlex}>
                <div className={s.stats}>
                    <table>
                        {selectCard.stats && (
                            selectCard.stats.map((st) => {
                                console.log(st);
                                let nameSt = st.stat.name;
                                if (nameSt === 'hp') {
                                    nameSt = nameSt.toUpperCase();
                                } else if (nameSt.includes("special")) {
                                    nameSt = nameSt.replace("special-", "SP ");
                                } else {
                                    nameSt = nameSt.charAt(0).toUpperCase() + nameSt.slice(1);
                                }
                                return <tr>
                                    <td>{nameSt}</td>
                                    <td>{st.base_stat}</td>
                                </tr>
                            })
                        )}
                        <tr>
                            <td>Weight</td>
                            <td>{selectCard.weight}</td>
                        </tr>
                        <tr>
                            <td>Total moves</td>
                            <td>{selectCard.moves && selectCard.moves.length}</td>
                        </tr>
                    </table>
                </div>
                <div className={s.rCont}>
                    <div className={s.img}>
                        {selectCard.sprites && (
                            <img src={selectCard.sprites.front_default} alt="" />
                        )}
                    </div>

                    <div className={s.types}>
                        {selectCard.types && (
                            selectCard.types.map((type) => {
                                return <PokemonClass key={type.type.name + type.type.slot} text={type.type.name}></PokemonClass>
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectCard;