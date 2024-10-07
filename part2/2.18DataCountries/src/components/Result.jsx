const Result=({data})=>{

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
                    <li key={index}>{value.name.common}</li>
                    ))}
             </ul>
        )

    }
    else if (data.length===1){
        return (
            <div>
                <h1>{data[0].name.common}</h1>
                
                
                <div>Capital: {data[0].capital.join(', ')}</div>
                <div>Area: {data[0].area}</div>

                <h4>Languages</h4>

                
                <ul>
                    {Object.values(data[0].languages).map((value,index)=>(
                        <li key={index}>{value}</li>
                    ))}
                </ul>

                <div>
                    <img src={data[0].flags.png} alt={data[0].flags.alt}/> 
                </div>
                
            </div>
        )
    }
    
}

export default Result