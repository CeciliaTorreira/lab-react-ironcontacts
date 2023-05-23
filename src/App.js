//import logo from './logo.svg';
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  //const fiveFirstContacts = contacts.slice(0, 5)
  const [allContacts, setContacts] = useState(contacts.slice(0, 5));
  
  
const addRandomContact = () => {
console.log("Añadiendo contacto") // Funciona
 const randomNumber = Math.floor(Math.random() * contacts.length)
 const randomContact = contacts[randomNumber]
  return(
    setContacts([...allContacts, randomContact])  
  )
}


  return (
    <div className="App">
      <div>
        <button onClick={addRandomContact}>Add random contact</button>
      
        <br />
      </div>
      <h1>Contact List</h1>

      {allContacts.map((contact) => {
        return (
          <p key={contact.id}>
            Picture:
            <br /> <img height={300} src={contact.pictureUrl} alt="" />
            <br />
            Name: {contact.name}
            <br />
            Popularity: {contact.popularity}
            <br />
            Won Oscar: {contact.wonOscar ? "🏆" : "❌"}
            <br />
            Won Emmy: {contact.wonEmmy ? "👑" : "❌"}
          </p>
        );
      })}
    </div>
  );
}

export default App;
