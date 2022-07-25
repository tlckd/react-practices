import React, {useState} from 'react';
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList';

function card({no, title, description, status, tasks}) {



    const[showDetail,setShowDetail] =useState(false);
    return (

        <div className={styles.Card}>
            <div style={{ // 색칠할려고 div를 위에다가 추가한거 
                position:'absolute',
                zIndex: -1,
                top:0, //옆에 다 붙게 할려고 설정
                left:0,
                bottom: 0,
                width:4,
                backgroundColor: status === 'ToDo' ? '#bd8D31' : (status === 'Doing' ? '#3a7e28' : '#222')
            }}/>
             <div className={showDetail ? [styles.Card__Title, styles.Card__Title__Open].join(" ") : styles.Card__Title}
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