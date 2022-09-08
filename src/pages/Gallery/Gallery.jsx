import FilterContiner from "../../containers/FIlterContainer/FilterContainer"
import CardContainer from "../../containers/CardContainer/CardContainer"

import { useState, useEffect } from "react";

const Gallery = () => {
    const [games,setGames] = useState([])

    const getGames = async () => {
      const url = "http://localhost:8080/images"
      const res = await fetch(url)
      const data = await res.json()
      setGames(data)
  
    }

    getGames()



    return (
        <>
        <h1>View Games</h1>
        <nav>
            <FilterContiner />
        </nav>
        <main>
            <CardContainer games={games}/>
        </main>
        </>
    )
}

export default Gallery