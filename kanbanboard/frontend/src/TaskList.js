import React from 'react';
import styles from './assets/css/TaskList.css'
import Task from './Task'

function TaskList({tasks}) {
    return (
        <div className='TaskList'>
            <ul>
                {tasks.map(task => <Task
                    key={task.no}
                    no={task.no}
                    name={task.name}
                    done={task.done}
                />)}
            </ul>
            <input  
                type='text'
                className={styles.TaskList__add_task}
                placeholder='태스크 추가'
            ></input>
        </div>
    );
}

export default TaskList;