import { NavLink } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { SiAudiomack } from "react-icons/si";
import { GiGuitar } from "react-icons/gi";
import { MdAudiotrack } from "react-icons/md";
import { RiDiscussLine } from "react-icons/ri";

const Navbar= () =>{
  return (
    <nav className="video-navbar">
      <ul className="video-navbar__list">
        <li>
          <NavLink to={ `${import.meta.env.BASE_URL}` } className={({ isActive }) => (isActive ? 'active' : 'normal')}><GiGuitar /> Live <span>Show Video</span></NavLink>
        </li>
        <li>
          <NavLink to={ `${import.meta.env.BASE_URL}audio`} className={({ isActive }) => (isActive ? 'active' : 'normal')}><MdAudiotrack /> Audio<span> Only</span></NavLink>
        </li>
        <li>
          <NavLink to={ `${import.meta.env.BASE_URL}lhxc` } className={({ isActive }) => (isActive ? 'active' : 'normal')}><SiAudiomack /><span> LHxC.com </span>Uploads</NavLink>
        </li>
        <li>
          <NavLink to={`${import.meta.env.BASE_URL}music-videos`} className={({ isActive }) => (isActive ? 'active' : 'normal')}><FaPlay /> <span>Music </span>Videos</NavLink>
        </li>
        <li>
          <NavLink to={ `${import.meta.env.BASE_URL}interviews`} className={({ isActive }) => (isActive ? 'active' : 'normal')}><RiDiscussLine /> Interviews</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;