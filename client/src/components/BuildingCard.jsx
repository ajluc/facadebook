const BuildingCard = (props) => {
  return (
    <div className="card building-card" onClick={() => props.onClick(props.id)}>
      <div className="img-wrapper">
        <img src={props.img} alt={props.building} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.building}</h3>
        <p>{props.architect}</p>
      </div>
    </div>
  )
}

export default BuildingCard