import React,{useRef, useEffect} from "react";
import {useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
let changeItem ;

function ListItem(){
//    not working
//    const vars = ['a', 'b'];
//    const listElementRefs = React.useMemo(
//     () => vars.map(()=> React.createRef()), 
//     [vars.join(',')]
//     );
   const listElementRefs = useRef([]);
   listElementRefs.current = [];

   const todoList =  useSelector(state => state.todoList);
   const dispatch = useDispatch();
   
   function CompleteTask(itemId){
    dispatch({type:"COMPLETE_TASK",payload:itemId})
   }
   function DeleteTask(itemId){
    dispatch({type:"DELETE_TASK",payload:itemId})
   }
   function updateTask(itemId){
    changeItem = listElementRefs.current[itemId-1].innerText;
    // console.log(listElementRefs[1].current);
    // console.log(itemId);
    dispatch({type:"UPDATE_TASK",payload:{
        'itemId':itemId,
        'changeItem':changeItem
    }})
   }
   const addToRefs = (el) => {
    if (el && !listElementRefs.current.includes(el)) {
        listElementRefs.current.push(el);
    }
  };
   return(
    <>

    <ul>
    {todoList &&  todoList.map((item) => 
     <li key={item.id} id={item.id}
       
       style={{textDecoration: item.completed == 'completed' ? 'line-through' : 'none' ,
               fontStyle: item.completed == 'completed' ? 'italic' : 'normal'}}
               >
    <span contentEditable 
      ref={addToRefs}>{item.item}</span>
    <span>
        <SaveIcon onClick={() => updateTask(item.id)}></SaveIcon> 
        <DeleteIcon onClick={() => DeleteTask(item.id)}></DeleteIcon>
        { item.completed != 'completed' && <DoneIcon onClick={() => CompleteTask(item.id)}></DoneIcon>}
        { item.completed == 'completed' && <CloseIcon onClick={() => CompleteTask(item.id)}></CloseIcon>}

    </span>
    
    </li>
     )}
     </ul>
    </>
   )
}

export default ListItem;

   //function CompleteTask(event){
   //console.log(event.target.id);