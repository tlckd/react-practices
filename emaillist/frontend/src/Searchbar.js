import React from 'react';
import styles from './assets/css/styles.css';

function Searchbar(props) {
    return (
        <div className={styles.Searchbar}>
            <input type='text' placeholder='search'
            onChange={e=>{
                props.callback(console.log(e.target.value));
            }}
            />
        </div>
    );
}

export default Searchbar;