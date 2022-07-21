import React from 'react';
//import styles from './assets/scss/Card.scss';

function card(props) {
    return (
        <div className={'styles.card'}>
             <div class='Card__Title'>{props.title}</div>
             <div class='Card__Details'>{props.description}</div>
             console.log("테스트 출력 " + {props.description})
        </div>
    );
}

export default card;