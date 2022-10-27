const StyleCard = (props) => {


  return (
    <div className="style card small-card" onClick={() => props.onClick(props.id)}>
      <div className="img-wrapper">
        <img src={props.exImg} alt="small-img" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.styleName}</h3>
        <p>{props.timeFrame}</p>
      </div>
    </div>
  )
}

export default StyleCard