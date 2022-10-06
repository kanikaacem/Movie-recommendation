import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import {useEffect} from "react";
import { QrCodeScannerOutlined } from "@mui/icons-material";
import { StyledEngineProvider } from '@mui/material/styles';

//don't use the original store state
const initialState = {
  values: [],
  todoList: [],
  totalTask: 0,
  completedTask:0,
  remainingTask:0,
  taskcompleted:'none',
  movies:[],
  searchedMovie:{},
  theme: 'light'

};

let updatedToDoList;
let completedTaskValue;
let deleteTaskComplete;

const reducer = (state,action) =>{
  switch(action.type){
    case "INCR":
      return { ...initialState ,totalTask : state.totalTask + 1};
    case "DECR":
      return { ...initialState,totalTask : state.totalTask - 1};
    case "RESET":
      return { count : initialState};
    case "ADD_ITEM":
      return { ...initialState,
        totalTask : state.todoList.length+1,
        completedTask : state.completedTask,
        remainingTask: state.remainingTask + 1,
        todoList: [...state.todoList,{ 'id': state.todoList.length == 0 ? 1: state.todoList.length+1 , 'item': action.payload ,'completed' : 'none'}]
      }
    case "COMPLETE_TASK":
       updatedToDoList = state.todoList.map(item => {
        if (item.id == action.payload)  {
          if(item.completed == 'none')
          {
            completedTaskValue = state.completedTask+1;
            return {...item,'completed':'completed'};
          }
          else
          {
            completedTaskValue = state.completedTask-1;
            return {...item,'completed':'none'}
          }
        }
        return item;
        
      })
      return ({...initialState,
        totalTask: state.totalTask,
        completedTask:completedTaskValue,
        remainingTask: state.totalTask - completedTaskValue,
        todoList:[...updatedToDoList]})
    case "DELETE_TASK":
      updatedToDoList = state.todoList.filter(item =>{
        if(item.id != action.payload)
        return {...item}

        item.id == action.payload && item.completed == "completed"
         ? 
         deleteTaskComplete = true : deleteTaskComplete = false;
         
      })
      return ({...initialState ,
        totalTask: state.totalTask - 1,
        completedTask: 
                    deleteTaskComplete ?
                    state.completedTask - 1 : state.completedTask,
        remainingTask: 
                    deleteTaskComplete ?
                    state.remainingTask  : state.remainingTask - 1,

        todoList:[...updatedToDoList]})
    case "UPDATE_TASK":
      updatedToDoList = state.todoList.map(item => {
        if (item.id == action.payload.itemId) 
          return {...item,'item':action.payload.changeItem}
        return item;
      })
      return ({...initialState,
        totalTask: state.totalTask,
        completedTask:completedTaskValue,
        remainingTask: state.totalTask - completedTaskValue,
        todoList:[...updatedToDoList]})
    case "INTIALIZE_MOVIES":
      return ({...initialState,movies:[...action.payload]})
    case "UPDATE_SEARCH_MOVIE":
      console.log(action.payload);
      return ({...initialState,movies:state.movies,searchedMovie:{...action.payload}})

    case "CHANGE_THEME":
       return ({...initialState,movies:state.movies,theme:action.payload})
    case "SCROLL_UP":
        window.scrollTo(0,0);
        return state;
    default:
      return state;

  }
}
const store = createStore(reducer,initialState);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
          <StyledEngineProvider injectFirst>
            <App />
         </StyledEngineProvider>

    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//1. npm install redux react-redux

// const reducer = (state,action) =>{
//   // if(action.type === 'INCREMENT'){
//   //   return state+1;
//   // }else if(action.type === 'DECREMENT'){
//   //   return state-1;
//   // }

//   // return state;
//   switch(action.type){
//     case 'INCREMENT':
//        return state + action.payload;
//     case 'DECREMENT':
//       return state - action.payload;
//     default:
//       return state;
//   }
// }
// const store = createStore(reducer,0);

// store.subscribe(()=>{
//   console.log('current state',store.getState());
// })

// store.dispatch({
//   type:"INCR"
// });
// store.dispatch({
//   type:"RESET"
// })
//  store.dispatch({
//   type:'INCREMENT',
//   payload:1
//   });

//   store.dispatch({
//     type:'INCREMENT',
//     payload:5
//   })

//   store.dispatch({
//     type:'DECREMENT',
//     payload:2
//   })


//https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
