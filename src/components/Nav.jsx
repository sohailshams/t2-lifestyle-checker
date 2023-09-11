import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="h-12 bg-[#333] text-white flex items-center justify-center sticky top-0 z-50 font-semibold">
      <Link to="/">T2 Lifestyle Checker</Link>
    </nav>
  );
}

export default Nav;
