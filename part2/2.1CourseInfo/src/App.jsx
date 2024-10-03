

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

const App=()=>{
  const course =
  { name: 'Web development curriculum',
  
  curriculum : [
        {
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
      },
      {
        id : 2,
        name : 'Node.js',
        parts:[
          {
            id: 1,
            name : 'Routing',
            exercises : 3
          },
          {
            id : 2,
            name : 'Middlewares',
            exercises : 7
          }
        ]
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
