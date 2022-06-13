import React from "react";
import { SearchContext } from "../../App";

import styles from './search.module.scss'


const Search = () => {

    const {searchValue, setSearchValue} = React.useContext(SearchContext)

    return (
        <div className={styles.root}>
            <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <title />
                <g data-name="Layer 2"
                    id="Layer_2">
                    <path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" />
                </g></svg>
            <input 
            value={searchValue}
            onChange = {(event) => setSearchValue(event.target.value)}
            className={styles.input} placeholder='Поиск пиццы ...' />
            {searchValue && 
            <svg 
            onClick={()=> setSearchValue('') }
            className={styles.clearIcon}
            xmlns="http://www.w3.org/2000/svg" 
            height="48" viewBox="0 0 48 48" width="48">
                <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/>
                <path d="M0 0h48v48H0z" fill="none"/></svg>
                }
            
            </div>
    )
}


export default Search