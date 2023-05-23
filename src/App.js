//import logo from './logo.svg';
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  //const fiveFirstContacts = contacts.slice(0, 5)
  const [allContacts, setContacts] = useState(contacts.slice(0, 5));

  const addRandomContact = () => {
    console.log("Añadiendo contacto"); // Funciona
    const randomNumber = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomNumber];
    return setContacts([...allContacts, randomContact]);
  };

  const sortContactsByName = () => {
    console.log("orden alfabético");

    const contactsSortedByName = JSON.parse(JSON.stringify(allContacts));

    contactsSortedByName.sort((contact2, contact1) => {
      if (contact2.name > contact1.name) {
        return 1;
      } else if (contact2.name < contact1.name) {
        return -1;
      } else {
        return 0;
      }
    });
    setContacts(contactsSortedByName);
  };

  const sortContactsByPopularity = () => {
    const contactsSortedByPopularity = JSON.parse(JSON.stringify(allContacts));

    contactsSortedByPopularity.sort((contact2, contact1) => {
      if (contact2.popularity < contact1.popularity) {
        return 1;
      } else if (contact2.popularity > contact1.popularity) {
        return -1;
      } else {
        return 0;
      }
    });

    setContacts(contactsSortedByPopularity);
  };

  const deleteContact = (index) => {
    console.log("Borrando contacto"); // Funciona
    const clonedContacts = JSON.parse(JSON.stringify(allContacts));
    clonedContacts.splice(index, 1);

    setContacts(clonedContacts);
  };

  return (
    <div className="App">
      <div>
        <button onClick={addRandomContact}>Add random contact</button>
        <button onClick={sortContactsByName}>Sort by Name</button>
        <button onClick={sortContactsByPopularity}>Sort by Popularity</button>
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
            <br />
            <button onClick={deleteContact}>Eliminar</button>
          </p>
        );
      })}
    </div>
  );
}

export default App;
