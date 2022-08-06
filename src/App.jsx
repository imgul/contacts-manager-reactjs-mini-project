import { useState } from 'react'
import './App.css'

function Button(props) {
  return <button className={props.class}>{props.title}</button>
}

function AddPeopleForm(props) {
  const [person, setPerson] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }
  function handleSubmit(e) {
    props.handleSubmit(person);
    setPerson("");
    e.preventDefault();
  }

  return <>
  <h2>Contacts Manager</h2>
  <form onSubmit={handleSubmit}>
  <input type="text" onChange={handleChange} value={person} className="p-2" placeholder="Person Name: e.g. Gulzaib" aria-label="Add Person Here" />
  <Button title={"Add Contact"} class={"btn btn-primary"} />
  </form>
  </>
}

function PeopleList(props) {
  const data = props.data;
  let listItems = data.map((data, index) => {return <li key={index} draggable>{data}</li> });
  return <>
  <h2>My Contacts</h2>
  <ul>{listItems}</ul>
  </>
}

let contacts = ['David', 'James', 'Siri']

function ContactsManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return <>
    <AddPeopleForm handleSubmit={addPerson} />
    <PeopleList data={contacts} />
  </>
}

function App() {

  return (
    <div className="App">
      <ContactsManager data={contacts} />
    </div>
  )
}

export default App
