import { Link } from "react-router-dom";
export function LoginPage(){
    return (
      <>
        <div className="text-h3 text-white text-center">Login Page</div>{" "}
        <Link to="/user/register/">RegisterPage</Link>
      </>
    );
}