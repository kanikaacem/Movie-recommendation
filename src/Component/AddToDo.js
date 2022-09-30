import {useSelector, useDispatch} from 'react-redux'

function AddToDo(){
    const dispatch = useDispatch();

    function submitForm(event){
        event.preventDefault();
        //stop the bydefault behaviour of the form submission
        let itemValue = event.target.elements.todoItem.value;
        event.target.elements.todoItem.value = "";
        dispatch({type:'ADD_ITEM',payload:itemValue});
    }
    return (<>
     <form onSubmit={submitForm}>
        <input name="todoItem" placeholder="Add an item"></input>
        <button type="submit"> Add Item</button>
     </form>
    </>)
}

export default AddToDo;