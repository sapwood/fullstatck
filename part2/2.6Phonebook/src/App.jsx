import { useState } from 'react'


const Name=({name,number})=>{
  return (
    <p>{name} {number}</p>
  )
 
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number : '040-1234567'
     }
  ]) 
  

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
      setPersons(persons.concat(nameObject))  
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
  
  return (
    <div>
      <h2>Phonebook</h2>
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
        persons.map(person=>(
          <Name key={person.name} name={person.name} number={person.number}/>
        ))
      }
    </div>
  )
}






export default App
