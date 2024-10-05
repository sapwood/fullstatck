import { useState } from 'react'


const Name=({name,number})=>{
  return (
    <p>{name} {number}</p>
  )
 
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  
  const [search,setSearch]=useState(persons)

  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber]=useState('')

  const handleSubmit=(event)=>{
    event.preventDefault()
    
    const nameObject={
      name: newName,
      number: newNumber,
    }

    const isDuplicated= persons.some(item=>item.name.toLowerCase()===nameObject.name.toLocaleLowerCase())
    
    if (isDuplicated){
      alert(`${nameObject.name} is alrady added to phonebook`)
    }
    else{
      const updatedPersons=persons.concat(nameObject)
      setPersons(updatedPersons)  
      setSearch(updatedPersons)

      setNewName('')
      setNewNumber('')
    }

  }
  const handleNameInput=(event)=>{
    
    setNewName(event.target.value)
  }

  const handleNumberInput=(event)=>{
    setNewNumber(event.target.value)
  }

  const handleSearch=(event)=>{
    const value=event.target.value
    setSearch(persons.filter(item=>item.name.toLowerCase().includes(value.toLowerCase())))

  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>

        filter shown with <input onChange={handleSearch}/>
      </div>

      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameInput}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberInput}  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        search.map(person=>(
          <Name key={person.name} name={person.name} number={person.number}/>
        ))
      }
    </div>
  )
}






export default App
