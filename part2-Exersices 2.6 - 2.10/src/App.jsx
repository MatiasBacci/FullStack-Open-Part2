import React, { useState } from 'react'
import {NewContactForm, SearchForm, Contacts} from './components'

const App = () => {
  const [persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber ] = useState('')
  const [searchPerson, setNewSearchPerson] = useState('')
 
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleSearch = (event) => setNewSearchPerson(event.target.value)
  
  const addPerson = (event) => {
    event.preventDefault()
      if (persons.some((person) => person.name.toLowerCase() === newName.toLowerCase())) {
        alert(`${newName} is already added to phonebook`);
        setNewName('')
        return;
      }
    const personObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  } 

  const filteredPersons = persons.filter((person) => person.name.toLowerCase().startsWith(searchPerson.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchForm searchPerson={searchPerson} onSearchPerson={handleSearch} filteredPersons={filteredPersons}/>
      <NewContactForm addPerson={addPerson} newName={newName} newNumber={newNumber} onNumberChange={handleNumberChange} onNameChange={handleNameChange} />
      <Contacts persons={persons}/>
    </div>
  )
}

export default App