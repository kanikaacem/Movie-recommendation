import {useState,useReducer, useLayoutEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
// const initial_value = 0;
// const reducer = (state,action) =>{
//     switch(action){
//         case "INCR":
//             return state + 1;
//         case "DECR":
//             return state - 1;
//         default:
//             return state;
//     }
// }
function Counter(){
   const totalTask =  useSelector(state => state.totalTask);
   const completedTask = useSelector(state => state.completedTask);
   const remainingTask = useSelector(state => state.remainingTask);
   const data = useSelector(state => state.values);
   const dispatch = useDispatch();
    
//    console.log(data);
    // const [counter,setCounter] = useState(0);
    // const [counter, dispatch] = useReducer(reducer,initial_value);
    //onClick={() => dispatch("INCR") }

    return (<>
        <div>
            <span>  Total Task : {totalTask} ; </span>
            <span>  Completed Task : {completedTask} ;</span>
            <span>  Remaining Task : {remainingTask}</span>
        </div>

        {/* <div style={{'display':'flex','gap':'10px'}}>
            <button onClick={() => dispatch({type:'INCR'})}>INCR</button>
            <button disabled={counter == 0} onClick={() => dispatch({type:'DECR'})}>DECR</button>
        </div> */}
       
    </>)
}
export default Counter;