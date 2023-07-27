// import { Link } from "react-router-dom";
import loginImage from "../static/img/login.jpeg";
import { LoginForm } from "./LoginForm";
export function LoginPage() {
  function onSubmit(e) {
    e.preventDefault()
    // check for validation
    // call api to save
    // if loggin success, work with token and 
    // redirect to home.
  }
  return (
    <>
      <div className="conatiner row bg-black">
        <div className="col-6 ">
          <img
            src={loginImage}
            className="rounded float-start img-fluid vh-100"
            alt="login"
          />
        </div>
        <div className="col-6 text-white">
          <div className="row vh-100 d-flex align-items-center p-4">
            <LoginForm onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </>
  );
}
