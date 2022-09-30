import {useRef} from "react";
import {useDispatch} from "react-redux";
function SearchForm(){
 const searchInputRef = useRef();
 const dispatch = useDispatch();
 let searchedValue;
 function handleSearch(event){
    event.preventDefault();
    searchedValue = searchInputRef.current.value.replace(' ','+');
    if(searchedValue === ''){
        dispatch({'type':'UPDATE_SEARCH_MOVIE','payload': {}});
    }
    else{
        fetch('https://www.omdbapi.com/?t='+searchedValue+'&apikey=4a3b711b')
        .then(response => response.json())
        .then(response => {
            dispatch({'type':'UPDATE_SEARCH_MOVIE','payload': response});
        })
        // .catch((err) => {
        //     console.log(err);
        // })
    }
    
    // console.log(searchInputRef.current.value.replace(' ','+'));
 }
 return (<>
    <div className="search-form">
        <h2> Search for a movie</h2>
        <form onSubmit={handleSearch}>
            <input name="search_movie" placeholder="Search a movie" ref={searchInputRef}></input>
            <button type="submit"> Search</button>
        </form>

    </div>
 </>)
}
export default SearchForm;