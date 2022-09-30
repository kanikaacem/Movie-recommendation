import {useEffect} from "react";
import {useSelector ,useDispatch} from "react-redux";
function MovieItem(){
    const dispatch = useDispatch();
    const movieItem = useSelector((state) => state.movies);
    // console.log(movies)
    // const [movieItem,setMovieItem] = useState();
    useEffect(()=>{
        fetch('https://www.omdbapi.com/?s=man&apikey=4a3b711b')
        .then(response => response.json())
        .then(data =>{
            //  setMovieItem(data['Search'])
              dispatch({'type':'INTIALIZE_MOVIES',
                        'payload': data['Search']})
            });
        fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
        .then(response => response.json())
        .then(data => console.log(data));
    },[]);
    
    return(<>
    <span style={{textAlign:'center'}}> Sharing a fews of your favourite movies</span>

    <div className="MovieItem">

        {movieItem &&  movieItem.map((item) => {
            return(<>
            <div className="Item" key={item.imdbID}>
                <h3> {item.Title}</h3>
                <img src={item.Poster}></img>
                <br></br>
                <span> {item.Year}</span>
            </div>
            </>)
        })}
        
    </div>
    </>)

}
export default MovieItem;