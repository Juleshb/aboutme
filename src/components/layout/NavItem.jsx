import { Link } from "react-scroll";

export default function NavItem({ id, label, onClick }) {
  return (
    <li>
      <Link
        to={id}
        spy
        smooth
        offset={-100}
        duration={500}
        onClick={onClick}
        activeClass="nav-link-active"
        className="nav-link"
      >
        {label}
      </Link>
    </li>
  );
}
