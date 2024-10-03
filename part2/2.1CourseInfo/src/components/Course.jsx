const Course = ({course})=>{
    return (
      <>
      <Header  text={course.name} />
      <Content curriculum={course.curriculum} />
      </>
  
    ) 
  }
  
  const Header=({text})=>{
    return (
      <h1>{text}</h1>
    )
  }
  
  const Content=({curriculum})=>{
    
    return (
    
      
      curriculum.map((item,q)=> 
      { 
        return (
          
          <div key={item.id}>
          <Header key={item.id+'header'} text={item.name} />
  
          {item.parts.map((e)=>(
            <Part key={q.toString()+e.id} name={e.name} exercises={e.exercises} />
          ))} 
          <Total key={item.id+'total'}  curriculum={item.parts} />
          </div>
        )
  
      }   
      )   
    )
  }
  
  const Part=({name,exercises})=>{
    
    return (
      
      <p>{name} {exercises}</p>
  
    )
    
  
  }
  
  
  const Total=({curriculum})=>{
    
    const sum = curriculum.reduce((accumulator,currentValue)=>(accumulator+currentValue.exercises),0)
    return(
      <h3>Total of {sum} exercises</h3>
    )
  }


  export default Course