import React from 'react'
import s from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={s.headerText}><img src="data:image/png;base64,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" alt="" /></div>
        </header>
    );
}

export default Header;