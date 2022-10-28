const Search = (props) => {

  return (
    <div className="search">
      <form className="search" onSubmit={props.onSubmit}>
        <input 
        type="text"
        name="search"
        value={props.value}
        placeholder="Search Buildings"
        onChange={props.onChange}>
        </input>
        <button className="search" type='submit'>O</button>
      </form>
    </div>
  )
}

export default Search