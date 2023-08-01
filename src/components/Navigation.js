import { withRouter, NavLink } from "react-router-dom/cjs/react-router-dom";

const items = [
  { name: "Home", to: "/", exact: true },
  { name: "New comment", to: "/new-comment" },

];

const Navigation = (props) => {
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                activeClassName="activeLink"
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);

{
  /* <header>
<nav>
  <ul>
    <li>
      <Link to="/about-us">About us </Link>
    </li>
    <li>
      <Link to="/">home</Link>
    </li>
    <li>
      <Link to="/profile">profile</Link>
    </li>
  </ul>
</nav>
</header> */
}
