import { useState,useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'




const App = () => {
  const [persons, setPersons] = useState([]) 
  
  const [search,setSearch]=useState([])

  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber]=useState('')

  useEffect(()=>{
    axios
      .get("http://localhost:3001/persons")
      .then(response=>{
        const value=response.data
        setPersons(value)
        setSearch(value)

      })
  },[])



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
        <Filter handle={handleSearch}/>
      
      <h2>add a new</h2>
        <PersonForm newName={newName} newNumber={newNumber} handleSubmit={handleSubmit} handleNameInput={handleNameInput} handleNumberInput={handleNumberInput} />
      <h2>Numbers</h2>
        <Persons search={search} />
    </div>
  )
}






export default App
