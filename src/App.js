
import SearchForm from './Component/SearchForm';
import MovieItem from './Component/MovieItem';
import SearchedMovie from './Component/SearchedMovie';
import {useSelector, useDispatch } from 'react-redux';
import { Parallax, Background } from "react-parallax";
import Header from './Component/Header';
import './index.css';
import AddToDo from './Component/AddToDo';
import ListItem from './Component/ListItem';
import Counter from './Counter';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./theme.js"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
// import { ThemeProvider } from '@material-ui/styles';
// import { createTheme } from '@material-ui/core/styles';
// import Login from './Component/Login';
import Middle  from './Middle';
function App() {
  
  const theme = useSelector(state => state.theme);
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  // const [theme,setTheme] = useState('light');
  const handleDarkMode = () => {
     theme === 'light' ? dispatch({type:'CHANGE_THEME' ,payload:'dark' }) :
      dispatch({type:'CHANGE_THEME' ,payload:'light'})
    // theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  const handleScrollUp = () =>{
    dispatch({type:'SCROLL_UP'});
  }
  // const lightTheme = createTheme({
  //     body:"#ffffff",
  //     color:"black",
  // })

  // const darkTheme = createTheme({
  //     body:"#242424",
  //     color:"black"
  // })
  // const insideStyles = {
  //   background: "white",
  //   padding: 20,
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%,-50%)"
  // };
  // const image1 =
  // "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
  // const image2 =
  // "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
  // const image3 =
  // "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
  // const image4 =
  // "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

    <>
      <GlobalStyles/>
      // {token !== '' ? <Middle></Middle> : <Login></Login>}
      <Middle/>
      <footer>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
            icon={theme === 'light' ?
            <DarkModeIcon></DarkModeIcon> :
            <LightModeIcon ></LightModeIcon>
           }
            tooltipTitle='toogle Dark/light Mode'
            onClick = {handleDarkMode}
          />
        <SpeedDialAction 
          icon={<FullscreenIcon></FullscreenIcon>}
          tooltipTitle='Full Screen' 
          />
        <SpeedDialAction
          icon= {<KeyboardDoubleArrowUpIcon></KeyboardDoubleArrowUpIcon>}
          tooltipTitle='Scroll UP'
          onClick = {handleScrollUp}
        />
      </SpeedDial>
      
        
      </footer>
    </>
    </ThemeProvider>

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

//right now, not using global theme we are using styled-components

{/* <Header></Header>
  <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>HTML inside the parallax</div>
      </div>
  </Parallax>
  <Parallax bgImage={image3} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>HTML inside the parallax</div>
      </div>
  </Parallax> */}
  
  {/* <div id="todoListMain">
    <h1> TO DO LIST</h1>
    <Counter></Counter>
    <AddToDo></AddToDo>
    <ListItem></ListItem>
    <h1> Movies Search</h1>
  </div> */}


  //using this theme Provider
  //https://mui.com/material-ui/customization/theming/#themeprovider
