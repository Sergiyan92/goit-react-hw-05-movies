import { NavLink, Outlet } from 'react-router-dom';
import css from './Heder.module.css';
const Heder = () => {
  return (
    <>
      <nav className={css.nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.active}` : `${css.link}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.active}` : `${css.link}`
          }
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
export default Heder;
