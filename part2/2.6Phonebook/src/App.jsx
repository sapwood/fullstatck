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
      
      const c = confirm(`${nameObject.name} is already added to phonebook,replace the old number with new one?`)
      
      if (c) {
        const id= persons.find(p=>p.name.toLowerCase()===nameObject.name.toLocaleLowerCase()).id
        
        personService
        .update(id,nameObject)
        .then(data=>{
          console.log(`${nameObject.name} number has been updated`)
          console.log(`${JSON.stringify(data)}`)
          const updatedPersons=persons.map(p=>
            ( p.id===id ? {...p,number:nameObject.number}: p) 
          )
          console.log(`update persons is ${JSON.stringify(updatedPersons)}`)

          setPersons(updatedPersons) 
          setSearch(updatedPersons)
          setNewName('')
          setNewNumber('')
        })
      }

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
