import React from 'react';
import styles from './assets/css/styles.css';

function Emaillist({emails, callback}) {
    return (
        <ul className={styles.Emaillist}>
                {emails.map((email) => {return (
                        <li key={email.no}>
                            {email.firstName + email.lastName}
                            <br/>
                            {email.email}
                        </li>
                )})}
        </ul>
    );
}

export default Emaillist;

    {

}