import {Navbar} from '../components/Navbar.js';
import { Outlet } from "react-router-dom";

export function IndexLayout () {
    return (
      <>
        <div
          className="index-section border broder-warning"
          style={{ height: "95vh" }}
        >
          <Navbar />
          <Outlet />
        </div>
        {/* All pages will be displayed here */}
        <footer className="text-white text-center">
          2023 Movie Platform
        </footer>
      </>
    );
}