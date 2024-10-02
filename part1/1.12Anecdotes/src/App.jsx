import { useState } from 'react'

const Button=({event,text})=>{
  return (
    <button onClick={event}>
      {text}
    </button>
  )
}


const App=()=>{
  const anecdotes= [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [select,setSelect] = useState(0)
  const [lastSelect,setLastSelect] = useState(0)
  const [vote,setVote] = useState({})

  const handleClick=()=>{
    let newSelect

    do {
      newSelect = Math.floor(Math.random()*anecdotes.length)
    } while (newSelect===lastSelect)
    
    setSelect(newSelect)
    setLastSelect(newSelect)
  }
  
  const handleVote=()=>{
    setVote(preVote=>{
      const newVote = {...preVote}
      newVote[select]=(newVote[select] || 0)+1
      return newVote
    })
    
  }
  


  return (
    <div>
      <h1>{anecdotes[select]}</h1>
      <div>
      <Button event={handleClick} text="Next Anecdote" />
      <Button event={handleVote} text="Vote" />
      </div>
      
    </div>
  )
}


export default App
