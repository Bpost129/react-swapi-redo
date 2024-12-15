import { useEffect, useState } from "react"
// import StarshipCard from "../../components/StarshipCard/StarshipCard"
import { getStarshipList } from "../../services/sw-api"
import { Link } from "react-router-dom"

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarships(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return (
    <>
      <h1>Starship List</h1>
      {starships.map(ship =>  
        <Link to={`/starships/${ship.url.substring(32)}`} key={ship._id}>
          <h3>!Starship!</h3>
          {ship.model}
        </Link>
      )}
    </>
  )
}

export default StarshipList