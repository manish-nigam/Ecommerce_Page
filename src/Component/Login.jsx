import React, { useContext, useState } from 'react';
import { AuthContext } from './Context';

const Login = () => {
  const {setIsloggedIn} = useContext(AuthContext)
  const [user,setUser] = useState({
    name:"",
    password:"",
  })

   function handleAuthentication() {
    if(user.name==="manish" && user.password==="nigam@1212"){
      setIsloggedIn(true);
    }else{
      alert("Enter Props Credentials")
    }
   }
  return (
    <div style={{
      width:"300px",
      boxShadow: "0 0 10px black",
      padding:"30px",
      margin : "150px auto",
      textAlign : "center"

    }} > 
      <h3>Login Form</h3>
      <div>
        <input type="text" placeholder='User Name'onChange={(e)=>{
          setUser({
            ...user,
            name:e.target.value,
          })
        }}/>
      </div>
      <br />
      <div>
        <input type="password" placeholder='Password' onChange={(e)=>{
          setUser({
            ...user,
            password: e.target.value,
          })
        }} />
      </div>
      <br />
      <button onClick={handleAuthentication}>Login</button>
    </div>
  );
}

export default Login;
