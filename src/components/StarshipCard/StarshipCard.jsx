const StarshipCard = ({ ship }) => {
  return (
    <>
      <h3>Starship Model Name</h3>
      <h1 style={{color: 'yellow'}}>{ship.model}</h1>
    </>
  )
}

export default StarshipCard