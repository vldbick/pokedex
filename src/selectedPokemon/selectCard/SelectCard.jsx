import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import s from './SelectCard.module.css'

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
            
        </div>
    );
}

export default SelectCard;