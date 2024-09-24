import SearchForm from "./Component/SearchForm";
import MovieItem from "./Component/MovieItem";
import SearchedMovie from './Component/SearchedMovie';
import {useSelector} from 'react-redux';
function Middle(){
    const searchedMovie = useSelector(state => state.searchedMovie);
    const userInformation  = useSelector(state => state.userInformation);
    return (<>
    <nav><a href="#">HOME</a></nav>
    <div id="movieListMain" >
        // <h2> Hello </h2>
        <SearchForm></SearchForm>
        { Object.keys(searchedMovie).length !== 0 && !searchedMovie.Error && <SearchedMovie></SearchedMovie>} 
        <MovieItem></MovieItem>
    </div>
    </>)
}

export default Middle;
