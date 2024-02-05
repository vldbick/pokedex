import React, { useState, useEffect } from 'react';
import s from './PokemonList.module.css';
import ListCard from './listCard/ListCard';
import axios from 'axios';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextPageUrl, setNextPageUrl] = useState(null);


    useEffect(() => {
        const fetchData = async (url) => {
            try {
                const response = await axios.get(url);
                setPokemonList(response.data.results);
                setNextPageUrl(response.data.next);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };
        const API = sessionStorage.getItem('API');
        fetchData(API);
    }, []);

    const handleLoadMore = () => {
        const fetchData = async (url) => {
            try {
                const response = await axios.get(url);
                setPokemonList((prevList) => [...prevList, ...response.data.results]);
                setNextPageUrl(response.data.next);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };
        if (nextPageUrl) {
            fetchData(nextPageUrl);
        }
    };

    return (
        <div className={s.cont}>
            <div className={s.list}>
                {pokemonList.map((card) => (
                    <ListCard key={card.name} url={card.url}></ListCard>
                ))}
            </div>
            {nextPageUrl && (
                <div className={s.more} onClick={handleLoadMore}>
                    Load More
                </div>
            )}
        </div>
    );
};

export default PokemonList;
