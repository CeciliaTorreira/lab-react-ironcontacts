//import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import { useState } from 'react';


function App() {

 const fiveFirstContacts = contacts.slice(0, 5)
 





  return (
    <div className="App">
      <h1>Contact List</h1>
      <ul>
        {fiveFirstContacts.map((contact)=>{
          return (<p key={contact.id}>
          Picture:
          <br /> <img height={300} src={contact.pictureUrl} alt="" />
          <br />
            Name: {contact.name}
            <br />
            Popularity: {contact.popularity}
          </p>)
          
        })}
      </ul>
    </div>
  );
}

export default App;
