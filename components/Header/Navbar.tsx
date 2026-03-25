import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const menus = ["Summer 2026 Men", "Summer 2026 Women", "Winter 2025 Men", "Winter 2025 Women", "Accessories", "Our Story", "Blog"];

  return (
    <nav className="navbar navbar-expand-lg border-bottom py-0">
      <div className="container-fluid px-4">
        <ul className="navbar-nav me-auto">
          {menus.map((menu) => (
            <li key={menu} className="nav-item nav-item-dropdown">
              <a className="nav-link" href="#">{menu}</a>
              {/* Dropdown sirf Men sections par dikhana hai toh condition laga sakte hain */}
              {menu.includes("Men") && <MegaMenu />}
            </li>
          ))}
        </ul>

        <div className="brand-logo mx-auto">MASON'S</div>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#">Search</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Account</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Cart (0)</a></li>
        </ul>
      </div>
    </nav>
  );
}