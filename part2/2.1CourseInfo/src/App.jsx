import Course from "./components/Course"



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
