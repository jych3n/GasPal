import React from 'react'
import React ,{useState}from 'react'

function Home() {
    const [data,setData]=useState(null)
    const [print,setPrint]=useState(false)
    function getData(val)
    {
        console.warn(val.target.value)
        setData(val.target.value)
        setPrint(false)
    }
    
    return (
        <div className='home'>
            {
                print?
                <h1> {data}</h1>
                :null
            }
            <input type="text" onChange={getData} />
            <button onClick={()=>setPrint(true)} >Print Data</button>
        </div>
    )
}

export default Home
