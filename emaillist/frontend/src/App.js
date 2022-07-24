import React, {useState} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import data from './assets/json/data.json'
import './assets/scss/App.scss';

const App = () => {
  const [emails, setEmails] = useState(data);

  
  const notifyEmailDelete = function(keyword) {
    const result = emails.filter(e =>{ 
      return e.email.indexOf(keyword) == -1
    })
    setEmails(result);
  }


  const notifyEmailAdd = function(addEmail) {
    const nextNo=emails.length+1;
    // addData={
    //   no:nextNo,
    //   firstName:addEmail.firstName,
    //   lastName:addEmail.lastName,
    //   email:addEmail.email
    // }

    //setEmails(emails.concat(addData));

    setEmails(emails.concat({
      no:nextNo,
      firstName:addEmail.firstName,
      lastName:addEmail.lastName,
      email:addEmail.email
    }));

  }

  const notifyKeywordChanged = function(keyword) {
    const result = data.filter(e => e.firstName.indexOf(keyword) !== -1 || e.lastName.indexOf(keyword) !== -1 || e.email.indexOf(keyword) !== -1);
    setEmails(result);
  }

  return (
    <div id={'App'}>
      <RegisterForm callback={notifyEmailAdd} />
      <SearchBar callback={notifyKeywordChanged} />
      <Emaillist emails={emails} callback={notifyEmailDelete} />
    </div>
  )
}

export default App