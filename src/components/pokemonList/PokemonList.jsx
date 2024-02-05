import React, { useState, useEffect } from 'react';
import s from './PokemonList.module.css';
import ListCard from './listCard/ListCard';
import axios from 'axios';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextPageUrl, setNextPageUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async (url) => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                setPokemonList(response.data.results);
                setNextPageUrl(response.data.next);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            } finally {
                setLoading(false);
            }
        };
        const API = sessionStorage.getItem('API');
        fetchData(API);
    }, []);

    const handleLoadMore = () => {
        const fetchData = async (url) => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                setPokemonList((prevList) => [...prevList, ...response.data.results]);
                setNextPageUrl(response.data.next);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            } finally {
                setLoading(false);
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
                <button disabled={loading} className={s.more} onClick={handleLoadMore}>
                    {loading ? 'Loading...' : 'Load More'}
                </button>
            )}
        </div>
    );
};

export default PokemonList;
