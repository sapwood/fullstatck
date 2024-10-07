import axios from "axios"
import { useEffect,useState } from "react"

const Result=({data,handleShow})=>{
    
    if (data===null){
        return null
    }

    else if (data.length>10){
        return (
            <p>Too many matches, specify anthoer filter</p>
        )
    }
    else if (data.length>1 && data.length<=10){
        
        return (

            <ul>
                {data.map((value,index)=>(
                    <div key={index}>
                    <li key={index}>
                        {value.name.common} <button key={index} onClick={()=>handleShow(value.name.common)} >show</button>
                    </li>
                    
                    </div>
                    ))}
             </ul>
        )

    }
    else if (data.length===1){
        return (
            <Detail data={data[0]}/>
        )
        
    }
    
}

const Detail=({data})=>{
    const weatherUrl="https://api.open-meteo.com/v1/forecast?"
    const [temp,setTemp] =useState(null)
    const [wind,setWind] = useState(null)

    useEffect(()=>{
        axios
          .get(`${weatherUrl}latitude=${data.latlng[0]}&longitude=${data.latlng[1]}&current=temperature_2m,wind_speed_10m`)
          .then((response)=>{
            setTemp(response.data.current.temperature_2m)
            setWind(response.data.current.wind_speed_10m)
          })
    },[])

    return (
        <div>
        <h1>{data.name.common}</h1>
        
        
        <div>Capital: {data.capital.join(', ')}</div>
        <div>Area: {data.area}</div>

        <h4>Languages</h4>

        
        <ul>
            {Object.values(data.languages).map((value,index)=>(
                <li key={index}>{value}</li>
            ))}
        </ul>

        <div>
            <img src={data.flags.png} alt={data.flags.alt}/> 
        </div>

        <div>
            <h1>Weather in {data.capital.join(', ')}</h1>
            
            <div>Temperature {temp}	Celsuis</div>
            <div>Wind {wind} km/h</div>

        </div>
        
    </div>
    )
}

export default Result