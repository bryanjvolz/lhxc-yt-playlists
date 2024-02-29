import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <aside id="sidebar" className="video-sidebar">
        <h1>Videos</h1>
        {/* <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div> */}

        <Navbar />

      </aside>
      <main id="detail" className="video-main">
        <Outlet />
      </main>
    </>
  );
}