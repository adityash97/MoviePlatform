// import { Link } from "react-router-dom";
import registerImage from "../static/img/register2.jpeg";
import { RegisterForm } from "./RegisterForm";
export function RegisterPage() {
  function onSubmit(e) {
    e.preventDefault();
    // check for validation
    // call api to save
    // if loggin success, work with token and
    // redirect to home.
  }
  return (
    <>
      <div
        className="conatiner row"
        style={{
          backgroundImage: `url(${registerImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="col-6 offset-3 text-white">
          <div className="row vh-100 d-flex align-items-center justify-content-center">
            <div className="col">
                <RegisterForm onSubmit={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
