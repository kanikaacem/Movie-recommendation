import {useDispatch} from "react-redux"
function Login(){
    const dispatch = useDispatch();
    function handleLogin(event){
        event.preventDefault();
        let login_credential = event.target.elements.login_credential.value;
        let password = event.target.elements.password.value;
        console.log(login_credential);
        console.log(password);
        console.log("I am running");
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ user_credential: login_credential,
                                 password: password })
          };
        
          fetch('http://localhost:8080/api/login', requestOptions)
          .then((response) => response.json())
          .then((newdata) => dispatch({type:'LOGIN',payload:newdata}))
    }
    return (<>
        <form id="LOGIN_FORM" onSubmit={handleLogin}>
            <h1> LOGIN </h1>
            {/* <label for="user_information">User Information</label> */}
            <input type="text" name="login_credential" id="login_credential" placeholder="Enter the email / mobile number"></input>
            <input type="password" name="password" placholder="password"></input>
            <button type="submit">Submit</button>
        </form>
    </>)
}
export default Login;