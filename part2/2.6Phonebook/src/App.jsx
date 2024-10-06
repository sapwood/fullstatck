import { useState,useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'




const App = () => {
  const [persons, setPersons] = useState([]) 
  
  const [search,setSearch]=useState([])

  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber]=useState('')

  useEffect(()=>{

    personService
      .getAll()
      .then(data=>{     
        setPersons(data)
        setSearch(data)
      })

  },[])



  const handleSubmit=(event)=>{
    event.preventDefault()
    
    const nameObject={

      name: newName,
      number: newNumber
      
    }

    const isDuplicated= persons.some(item=>item.name.toLowerCase()===nameObject.name.toLocaleLowerCase())
    
    if (isDuplicated){
      alert(`${nameObject.name} is alrady added to phonebook`)
    }
    else{
      
      personService
        .create(nameObject)
        .then(data=>{
          const updatedPersons=persons.concat(data)
          setPersons(updatedPersons) 
          setSearch(updatedPersons)
          setNewName('')
          setNewNumber('')
        })
       
      


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

  const handleDelete=(id)=>{
    if (confirm(`Delete ${persons.find(p=>p.id===id).name} ?`))
    {
      personService
      .remove(id)
      .then(data=>{
        console.log(`${data} has been deleted`)
        const updatedPersons=persons.filter(p=>p.id!==id)
        setPersons(updatedPersons)
        setSearch(updatedPersons)

      })
    }

  }
  
  return (
    <div>
      <h2>Phonebook</h2>
        <Filter handle={handleSearch}/>
      
      <h2>add a new</h2>
        <PersonForm newName={newName} newNumber={newNumber} handleSubmit={handleSubmit} handleNameInput={handleNameInput} handleNumberInput={handleNumberInput} />
      <h2>Numbers</h2>
      
        <Persons search={search} handleDelete={handleDelete}/>
    </div>
  )
}






export default App
