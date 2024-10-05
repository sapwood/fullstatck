const Persons=({search})=>{
    return (
        
            search.map(person=>(
              <Name key={person.name} name={person.name} number={person.number}/>
            ))
        
    )

}

const Name=({name,number})=>{
    return (
      <p>{name} {number}</p>
    )
   
  }

export default Persons