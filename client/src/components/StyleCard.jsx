const StyleCard = (props) => {

  return (
    <div className="style card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.exImg} alt="style image" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.styleName}</h3>
        <p>{props.timeFrame}</p>
      </div>
    </div>
  )
}

export default StyleCard