const ReviewCard = (props) => {
  return (
    <div className="card review-card">
      <div className="flex-col">
        <p>{props.pseudonym}</p>
        <p>{props.rating}</p>
        <p>{props.message}</p>
      </div>
    </div>
  )
}

export default ReviewCard