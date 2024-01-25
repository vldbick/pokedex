import React from 'react'
import { Route, Routes } from 'react-router-dom';
import SelectCard from './selectCard/SelectCard';
import s from './SelectPokemon.module.css'

const SelectedPokemon = () => {

    const hideAndSick = () => {
        const el = document.querySelector('#selectPokemon');
        el.style.display = 'none';
    }

    return (
        <div className={s.contCard} onClick={hideAndSick}>
            <Routes>
                <Route path='/' element={<div></div>}></Route>
                <Route path='/:pokemon' element={<SelectCard></SelectCard>}></Route>
            </Routes>
        </div>
    );
}

export default SelectedPokemon;