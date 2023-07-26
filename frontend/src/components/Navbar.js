
import { Link } from "react-router-dom";
export function Navbar(){

    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-dark m-0">
          <div className="container-fluid d-flex">
            <span className="badge ">
              <Link className="btn btn-danger fw-bold " to="/">
                Movie Platform
              </Link>
            </span>

            <div className="collapse navbar-collapse " id="navbarNav">
              <div className="col-6">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link active text-white"
                      aria-current="page"
                      to="/home"
                    >
                      Home
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-6">
                <ul className="navbar-nav d-flex justify-content-end">
                  <div className="row ">
                    <div className="col">
                      <li className="nav-item">
                        <Link
                          className="nav-link active text-white btn btn-primary"
                          aria-current="page"
                          to="/user/login/"
                        >
                          Login
                        </Link>
                      </li>
                    </div>
                    <div className="col">
                      <li className="nav-item">
                        <Link
                          className="nav-link active text-white btn btn-success text-nowrap"
                          aria-current="page"
                          to="/user/register/"
                        >
                          Sign up
                        </Link>
                      </li>
                    </div>
                    <div className="col">
                      <li className="nav-item">
                        <Link
                          className="nav-link active text-white btn btn-danger text-nowrap"
                          aria-current="page"
                          to="/"
                        >
                          other 1
                        </Link>
                      </li>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
}

