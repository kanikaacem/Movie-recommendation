import { useSelector, UseSelector } from "react-redux";
function SearchedMovie(){
    const searchedMovie = useSelector(state => state.searchedMovie)
    
    return (<>
     <div className="searchedMovie">
        <div className="leftDiv">
          <img src={searchedMovie.Poster} alt={searchedMovie.Title} ></img>
        </div>
        <div className="rightDiv">
            <h4>{searchedMovie.Title} ({searchedMovie.Runtime})</h4>
            <span>{searchedMovie.Plot}</span>
            <span><b>Genre : </b>{searchedMovie.Genre}</span>
            <span><b>Language : </b> {searchedMovie.Language} </span>
            <span><b>Released : </b> {searchedMovie.Released} </span>
            <span><b>Director : </b> {searchedMovie.Director} </span>
            <span><b>Actors : </b> {searchedMovie.Actors} </span>
            <span><b>Box Office : </b> {searchedMovie.BoxOffice}</span>
            <span><b>Awards : </b>{ searchedMovie.Awards}</span>
        </div>
     </div>
    </>)
}

export default SearchedMovie;