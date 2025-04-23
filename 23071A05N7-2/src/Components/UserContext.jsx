import React, { useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'
export const userContextObj = createContext();
function UserContext({children}) {

  const [currentUser,setCurrentUser]=useState(null);
  const [status, setStatus]=useState(false);
  const [loginErr,setLoginErr]=useState(null);
  async function handleLogin({username,password},navigate){
    try{
      const res=await axios.get(`http://localhost:3000/users?username=${username}&password=${password}`);
      const user=res.data;
      if(user.length!==0){
        setStatus(true);
        setCurrentUser(user);
        setLoginErr(null);
        navigate("/");
      }else{
        setLoginErr({message:"invalid credentials"});
      }

    } catch(err)
    {
      setLoginErr({message:"backend error"});
    }
  }
  async function handleRegister({username,password},navigate){
    try{
      const res=await axios.get( `http://localhost:3000/users?username=${username}`)
      // console.log(res)
      if(res.data.length>0){
        setLoginErr({message:"Usrname already exists"});
      }
      else{
        const createUser=await axios.post("http://localhost:3000/users",{username,password});
        if(createUser.status===201)
        {
          setLoginErr(null);
          navigate("/signin");
        }
      }
    }catch(err)
    {
      setLoginErr({message:"some error registering"});
    }
  }

  function logout()
  {
    setCurrentUser(null);
    setLoginErr(null);
    setStatus(false);
  }

  return (
    <userContextObj.Provider value={{logout,handleLogin,handleRegister,currentUser,loginErr,status}}>
      {children}
    </userContextObj.Provider>
  )
}

export default UserContext