import "./navBar.css";
const NavBar = () => {
  return (
    <nav className="n">
      <a href="#intro" className="s-ti">
        Home
      </a>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
