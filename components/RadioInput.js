import NavLink from "./NavLink";
const RadioInput = ({ id, to, activeStyle, ariaLabel }) => (
  <NavLink href={to} id={id} activeStyle={activeStyle}>
    <a aria-label={ariaLabel}>
      <input type="radio" name="navbar-option" id={id} value={id} required />
    </a>
  </NavLink>
);

export default RadioInput;
