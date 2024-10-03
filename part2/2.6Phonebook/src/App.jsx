import { useState } from 'react'


const Name=({name})=>{
  return (
    <p>{name}</p>
  )
 
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit=(event)=>{
    event.preventDefault()
    
    const nameObject={
      name: newName
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }
  const handleInput=(event)=>{
    
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person=>(
          <Name key={person.name} name={person.name}/>
        ))
      }
    </div>
  )
}






export default App
