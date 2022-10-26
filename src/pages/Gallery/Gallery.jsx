import FilterContiner from "../../containers/FIlterContainer/FilterContainer"
import CardContainer from "../../containers/CardContainer/CardContainer"
import "./Gallery.scss"

import { useState, useEffect } from "react";

const Gallery = () => {
    const [holiday,setHoliday] = useState([])
    const [name, setName] = useState("")
    const [status, setStatus] = useState("")

    const getHoliday = async () => {
      let query = `?${name}&${status}`;
     const url = `http://localhost:8080/images${query}`
      const res = await fetch(url)
      const data = await res.json()
      setHoliday(data)
  
    }

    useEffect(() => {
        getHoliday(name, status)
    },[name,status])

    const handleName = name => {
        if (name !=="") {
            setName(`name=${name}`)
        } else {
            setName("")
        }

    }

    return (
        <>
        <div className="Gallery">
        <h1>Holidays</h1>
        <nav>
            <FilterContiner checkName={handleName} />
        </nav>
        <main>
            <CardContainer holidays={holiday}/>
        </main>
        </div>
        </>
    )
}

export default Gallery