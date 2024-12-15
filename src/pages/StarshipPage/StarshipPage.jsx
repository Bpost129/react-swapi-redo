import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getStarship } from "../../services/sw-api"

const StarshipPage = () => {
  const [ship, setShip] = useState({})
  const { shipId } = useParams()

  useEffect(() => {
    const fetchShip = async () => {
      const shipData = await getStarship(shipId)
      setShip(shipData)
    }
    fetchShip()
  }, [shipId])

  return (
    <>
      <h1>Starship Details</h1>
      <h1>{ship.model}</h1>
    </>
  )
}

export default StarshipPage