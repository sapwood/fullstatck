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
                    <div>
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
        
    </div>
    )
}

export default Result