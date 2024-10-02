import { useState } from 'react'


const Button=({event,text})=>{
  return (
    <button onClick={event}>
      {text}
    </button>
  )
}

const Title=({title})=>{

  return (
    <h1>{title}</h1>
  )
}

const Display=({content,num})=>{
  
  return (
    <p>{content} {num}</p>
  )
}


const App=()=>{

  const [rate,setRate] = useState(
    {
      good: 0,
      neutral : 0,
      bad : 0
    }

  )
  const handleGoodClick=()=>{
    setRate({...rate,good:rate.good+1})
  }

  const handleNeutralClick=()=>{
    setRate({...rate,neutral:rate.neutral+1})
  }

  const handleBadClick=()=>{
    setRate({...rate,bad:rate.bad+1})
  }

  const total = rate.good+rate.neutral+rate.bad
  const average = (rate.good*1+rate.neutral*0+rate.bad*-1)/total
  const positive = (rate.good/total)*100+'%'
 
  return (

    <div>
      <Title title="Give Feedback" />
      <Button event={handleGoodClick} text='good' />
      <Button event={handleNeutralClick} text='neutral' />
      <Button event={handleBadClick} text='bad' />
      <Title title="Statistics" />
      <Display content='good' num={rate.good} />
      <Display content='neutral' num={rate.neutral} />
      <Display content='bad' num={rate.bad} />
      <Display content='all' num={total} />
      <Display content='average' num={average} />
      <Display content='positive' num={positive} />
    </div>

  )

}
export default App
