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
    </div>

  )

}
export default App
