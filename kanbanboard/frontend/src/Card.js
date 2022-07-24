import React, {useState} from 'react';
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList';

function card({no, title, description, status, tasks}) {

    const[showDetail,setShowDetail] =useState(false);
    return (

        <div className={styles.Card}>
             <div className={[styles.Card__Title, styles.Card__Title__Open].join(" ")}
                onClick={e=>{setShowDetail(!showDetail) }}> 
                {title}
             </div>

            {
                console.log('카드에 들어옴')
            }

             {
                showDetail?  
                    <div className={'Card_Details'}>
                        {description}
                        <TaskList tasks={tasks}/>    
                    </div>
                : null
            }

        </div>

    );
}

export default card;