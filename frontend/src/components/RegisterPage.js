import {Link} from 'react-router-dom'
export function RegisterPage(){
    return (
      <>
        <div className="text-h3 text-white text-center">Register Page</div>{" "}
        <Link to="/user/login/">Login</Link>
      </>
    );
}