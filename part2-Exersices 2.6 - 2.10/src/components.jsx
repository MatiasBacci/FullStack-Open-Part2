
const SearchForm = ({searchPerson, onSearchPerson, filteredPersons}) => {
    const isSearching = searchPerson != ''; 
  
    return (
      <div>
        <h2>Search Contact</h2>
        <div>
          Name to Search: <input type="text" value={searchPerson} onChange={onSearchPerson}/>
        </div>
        {isSearching && 
          (<div>
            <h3>Search Results</h3>
            <ul>
                {filteredPersons.map(person =>
                  <Person key={person.id} id={person.id} name={person.name} number={person.number}/>
                )}
            </ul>
          </div>
        )}
      </div>
    )
}
  
const NewContactForm = ({addPerson, newName, newNumber, onNameChange, onNumberChange}) => {
    return (
      <div>
      <h2>Add a new contact</h2>
      <form onSubmit={addPerson}>
          <div>
            Name: <input  type="text" value={newName} onChange={onNameChange}/>
          </div>
          <div>
            Number: <input type="number" value={newNumber} onChange={onNumberChange}/>
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
        </div>
    )
}

const Person = ({id, name, number}) => <li>ID: {id} {name} {number}</li>
  
const Contacts = ({persons}) => {
    return (
      <div>
        <h2>Saved contacts</h2>
            <ul>
            {persons.map(person =>
              <Person key={person.id} id={person.id} name={person.name} number={person.number}/>
            )}
        </ul>
      </div>
    )
}


export {SearchForm, NewContactForm, Contacts}