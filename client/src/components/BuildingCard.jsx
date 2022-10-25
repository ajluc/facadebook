const BuildingCard = (props) => {

  return (
    <div className="card building-card" onClick={() => {console.log('click')}}>
      <div className="img-wrapper">
        {/* <img src={} alt={} /> */}
      </div>
      <div className="info-wrapper flex-col">
        <h3>name of building</h3>
        <p>all the info</p>
      </div>
    </div>
  )
}

export default BuildingCard