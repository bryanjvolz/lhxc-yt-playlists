import { Link } from "react-router-dom";

const Navbar= () =>{
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Live Show Video</Link>
        </li>
        <li>
          <Link to="/audio">Audio Only</Link>
        </li>
        <li>
          <Link to="/lhxc">LHxC.com Uploads</Link>
        </li>
        <li>
          <Link to="/music-videos">Music Videos</Link>
        </li>
        <li>
          <Link to="/interviews">Interviews</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;