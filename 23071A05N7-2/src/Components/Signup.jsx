import React from "react";
import { userContextObj } from "./UserContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function Signup() {
  const { handleRegister, loginErr } = useContext(userContextObj);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h1>Signup</h1>
      {loginErr && (
        <p className="text-danger text-center">{loginErr.message}</p>
      )}
      <form
        action=""
        className="form w-50 mx-auto"
        onSubmit={handleSubmit((data) => {
          handleRegister(data, navigate);
        })}
      >
        <div className="container">
          <label htmlFor="username" className="form-label">
            username
          </label>
          <input
            type="text"
            className="form-control"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <p className="text-warning">* This is a required field</p>
          )}
        </div>
        <div className="container">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            className="form-control"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-warning">* This is a required field</p>
          )}
        </div>
        <div className="container">
          <label htmlFor="cpassword" className="form-label">
            confirm password
          </label>
          <input type="cpassword" className="form-control" />
        </div>
        <button className="btn btn-danger" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
