import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "./Carousel";
export function Home() {
  return (
    <>
      <div className="search-bar d-flex justify-content-center">
        <div className="input-group input-group-lg w-75 ">
          {/* options */}
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            TV SHOWS
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
          {/* place holder */}
          <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
          />
          {/* search button */}
          <span class="input-group-text btn btn-light">
            <FontAwesomeIcon icon={faSearch} shake />
          </span>
        </div>
      </div>
      {/* follow us */}
      <div
        className="d-flex justify-content-end gap-3 align-items-center"
        style={{ width: "85%", der: "1px solid red" }}
      >
        <div className="text-h3 text-white fw-bold">Follow us : </div>
        <FontAwesomeIcon icon={faFacebookSquare} style={{ color: "#295dff" }} />
        <FontAwesomeIcon
          icon={faInstagramSquare}
          style={{ color: "#f06652" }}
        />
      </div>
      {/* follow us icon cards */}
      
      {/* carousels */}

      <Carousel />
    </>
  );
}
