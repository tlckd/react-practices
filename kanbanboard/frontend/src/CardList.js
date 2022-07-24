import React from 'react';
import Card from './Card';
import styles from './assets/css/CardList.css';

function CardList({title, cards}) {
    console.log(title, ":", cards);
    return (
        <div className={styles.CardList}>
            <h1>{title}</h1>
            {cards.map(
                (card)=>
                    <Card
                        key={card.no}
                        no={card.no}
                        title={card.title}
                        status={card.status}
                        description={card.description}
                        tasks={card.tasks}/>
            )}
        </div>
    );
}

export default CardList;