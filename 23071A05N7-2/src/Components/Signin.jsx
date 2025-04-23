import React from "react";
import { useForm } from "react-hook-form";
import{ userContextObj }from "./UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const {handleLogin,loginErr}=useContext(userContextObj);
  const navigate=useNavigate();
  return (
    <div className='text-center'>
      <h1>Signin</h1>
      <form action="" className='form w-50 mx-auto' onSubmit={handleSubmit((data)=>handleLogin(data,navigate))}>
        {
          loginErr && <p className="text-danger">{loginErr.message}</p>
        }
        <div>
          <label htmlFor="username">name</label>
          <input
            type="text"
            className="form-control"
            {...register("username")}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="form-control"
            {...register("password")}
          />
        </div>

        <button className="btn btn-danger" type="submit"> Submit</button>
      </form>
    </div>
  );
}

export default Signin;
