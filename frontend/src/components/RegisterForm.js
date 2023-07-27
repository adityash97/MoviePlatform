import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle,faGithub } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

export function RegisterForm(props) {
      const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    // check for validation
    // call api to save
    // if loggin success, work with token and
    // redirect to home.
  }
    return (
      <form className="row g-3" onSubmit={onSubmit}>
        {/* <div className="col-12">
        <div class="input-group">
          <span class="input-group-text">First & Last name</span>
          <input type="text" aria-label="First name" class="form-control" />
          <vr />
          <input type="text" aria-label="Last name" class="form-control" />
        </div>
      </div>

      <div className="col-12">
        <div class="input-group">
          <span class="input-group-text">Email</span>
          <input type="text" aria-label="First name" class="form-control" />
          <vr />
        </div>
      </div>
      <div className="col-12">
        <div class="input-group">
          <span class="input-group-text">Password & Password again</span>
          <input type="text" aria-label="First name" class="form-control" />
          <input type="text" aria-label="First name" class="form-control" />
        </div>
      </div> */}

        <div className="col-md-6">
          <label for="first-name" className="form-label">
            First Name
          </label>
          <input type="text" className="form-control" id="first-name" />
        </div>
        <div className="col-md-6">
          <label for="last-name" className="form-label">
            Last Name
          </label>
          <input type="text" className="form-control" id="last-name" />
        </div>

        <div className="col-12">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>

        <div className="col-md-6">
          <label for="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="col-md-6">
          <label for="password2" className="form-label">
            Password Again
          </label>
          <input type="password" className="form-control" id="password2" />
        </div>

        <div className="col-md-6">
          <button
            type="submit"
            className="btn btn-primary form-control text-nowrap"
          >
            Register
          </button>
        </div>

        <div className="col-md-6 d-flex justify-content-between">
          <div className="row">
            <div className="col text-nowrap m-2">
              <p className="fw-bold">Or signup using : </p>
            </div>
            <div className="col d-flex justify-content-end">
              <button className="m-2 rounded">
                {/* <FontAwesomeIcon icon={faGoogle} />
                 */}
                <FontAwesomeIcon
                  icon={faGoogle}
                  size="lg"
                  style={{ color: "#ff2500" }}
                />
              </button>
              <button className="m-2 rounded">
                {/* <FontAwesomeIcon icon={faGoogle} />
                 */}
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                  style={{ color: "#ff2500" }}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6 ">
          <p
            className="text-white btn btn-dark"
            onClick={() => navigate("/user/login/")}
          >
            Already have an account?
          </p>
        </div>
      </form>
    );
}
