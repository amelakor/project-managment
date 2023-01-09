import logo from './assets/logo.png';
function Header() {
  return (
    <nav className="navbar bg-light mb-4">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} alt="logo" />
            <span className="ml-2">Project Managment</span>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Header;
