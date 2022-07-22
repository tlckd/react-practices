import React, {useState} from 'react';
import Emaillist from './Emaillist';
import Searchbar from './Searchbar';
import styles from './assets/css/styles.css';
import data from './assets/json/data.json';
import { func } from 'prop-types';

function App() {
    const [emails, setEmails] = useState(data);

    const notifyEmailDelete = function(no){
        console.log(no)
    }
    
    const notifyEmailAdd = function(email){
        
        console.log(email);
        const response =fetch('/api',{ //이런시긍로 추가하면됨 
            method: 'post',
            headers: {
                'Content-Type': '',
                'Accept': ''
            },
            body: JSON.stringify(email)
        });

        response
    }

    const notifyKeywordChanged = function(keyword){ 
        emails.filter(email=>email.firstName.indexOf(keyword)!= -1 || email.lastName.indexOf(keyword)) // indexOf로 키워드가 이쓴ㄴ지 없는지 필터링으로 검사한다음 set으로 바꿔치기 나중에 강사님 코드 보기 
    }

    return (
        <div id={styles.App}>
            <Searchbar callback={notifyKeywordChanged}/> 
            <Emaillist emails={emails} callback={notifyEmailAdd}/>
        </div>
    );
}

export default App;