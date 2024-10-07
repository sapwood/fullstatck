import { useState, useEffect } from 'react'
import axios from 'axios'
import Result from './components/Result'

const App=()=>{

  const [countryName,setCountryName] = useState(null)
  const [result,setResult] = useState(null)

  const baseUrl="https://studies.cs.helsinki.fi/restcountries/api"

  useEffect(()=>{
    const delay= setTimeout(()=>{
      if (countryName){
        axios
        .get(`${baseUrl}/all`)
        .then((response)=>{
  
          const res = response.data.filter(d=>d.name.common.toLowerCase().includes(countryName.toLocaleLowerCase()))
  

          setResult(res)
        })
      }

    },500)
    return ()=>clearTimeout(delay)

  },[countryName])

  const handleChange=(event)=>{

    setCountryName(event.target.value)
    
  }

  return (
    <div>
      
      find countries: <input  onChange={handleChange} />
      <Result data={result}/>
    </div>
  )
}
export default App
