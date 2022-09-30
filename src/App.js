import AddToDo from './Component/AddToDo';
import ListItem from './Component/ListItem';
import Counter from './Counter';
import SearchForm from './Component/SearchForm';
import MovieItem from './Component/MovieItem';
import SearchedMovie from './Component/SearchedMovie';
import {useSelector, useDispatch } from 'react-redux';
import { Parallax, Background } from "react-parallax";
import Header from './Component/Header';
import './index.css';

function App() {
  const searchedMovie = useSelector(state => state.searchedMovie);
  const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };
  const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
  const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
  const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
  const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

  return (<>
  <Header></Header>
  <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>HTML inside the parallax</div>
      </div>
  </Parallax>
  <Parallax bgImage={image3} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>HTML inside the parallax</div>
      </div>
  </Parallax>
  
  {/* <div id="todoListMain">
    <h1> TO DO LIST</h1>
    <Counter></Counter>
    <AddToDo></AddToDo>
    <ListItem></ListItem>
    <h1> Movies Search</h1>
  </div> */}
  {/* <div id="movieListMain">
  <SearchForm></SearchForm>
  { Object.keys(searchedMovie).length !== 0 && !searchedMovie.Error && <SearchedMovie></SearchedMovie>} 
  <MovieItem></MovieItem>
  </div> */}
    
  </>
  )
 
}

export default App;

// import react, {useState} from "react";
// import Counter from './Counter';
// const [counter, setCounter] = useState(0)

// Action: code that causes an update to the state when something happens
// const increment = () => {
//   setCounter(prevCounter => prevCounter + 1)
// }

// View: the UI definition
/* <Counter></Counter> */
