

const Course = ({course})=>{
  return (
    <>
    <Header text={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </>

  ) 
}

const Header=({text})=>{
  return (
    <h1>{text}</h1>
  )
}

const Content=({parts})=>{
  
  return (
    parts.map(e=> 
    <Part key={e.id} name={e.name} exercises={e.exercises} />
 
    )
  )
}

const Part=({name,exercises})=>{
  
  return (
    
    <p>{name} {exercises}</p>

  )
  

}


const Total=({parts})=>{
  const sum= parts.reduce((accumulator,currentValue)=>(accumulator+currentValue.exercises),0)
  return(
    <h3>Total of {sum} exercises</h3>
  )
}

const App=()=>{
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name : 'Redux',
        exercises : 11,
        id: 4
      }
    ]
  }

  
  
  
  return (
    <div>
      <Course course={course} />
   
    </div>
  )
}




export default App
