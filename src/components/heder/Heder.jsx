import { NavLink, Outlet } from 'react-router-dom';

const Heder = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link " aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/movies">
              Movies
            </NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Heder;
