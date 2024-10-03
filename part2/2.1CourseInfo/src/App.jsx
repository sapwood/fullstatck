

const Course = ({course})=>{
  return (
    <>
    <Header text={course.name} />
    <Content parts={course.parts} />
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



const Total=(props)=>{
  return(
    <p>Number of exercises {props.course.parts[0].exercises+props.course.parts[1].exercises+props.course.parts[2].exercises}</p>
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
