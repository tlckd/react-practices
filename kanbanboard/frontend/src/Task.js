import React,{useState} from 'react';
import styles from './assets/css/Task.css'
function Task({no, name, done, notifyChangeTaskDone}) {
    const [checkState,setCheckState] = useState(done)
    return (
        <li className={styles.Task}>
        
        <input 
            type='checkbox' 
            checked={checkState} 
            onChange={e=>{setCheckState(!checkState)}} />
        {name}
        <a href='#' className={styles.Task__remove}/>
    </li>
    );
}

export default Task;