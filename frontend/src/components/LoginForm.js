import { useNavigate } from "react-router-dom";

export function LoginForm(props){
  const navigate = useNavigate()
    return (
      <form onSubmit={props.onSubmit}>
        <div className="row mb-3">
          <h1 className="col-sm-9 offset-sm-3 mb-3 ">Login to continue</h1>
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember-me"
              />
              <label className="form-check-label" for="remember-me">
                Remember Me
              </label>
            </div>
          </div>
        </div>
        <div className="row pull-right">
          <div className="col-sm-5 offset-sm-7 ml-auto">
            <div className="row gy-2">
              <button type="submit" className="btn btn-primary text-nowrap">
                Sign in
              </button>
              <div className="col d-flex justify-content-center">
                <p
                  className="text-white btn btn-dark"
                  onClick={() => navigate("/user/register/")}
                >
                  New to this?Register here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
}