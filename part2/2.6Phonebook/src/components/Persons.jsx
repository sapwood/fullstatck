const Persons=({search,handleDelete})=>{
    return (
        
            search.map(person=>(
              <Name key={person.name} name={person.name} number={person.number} handleDelete={()=>handleDelete(person.id)}/>
            ))
        
    )

}

const Name=({name,number,handleDelete})=>{
    return (
      <div>
      {name} {number}
      <button onClick={handleDelete}>Delete</button>
      </div>
    )
   
  }

export default Persons