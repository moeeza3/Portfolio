import Link from "next/link";
const Menu = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <div className="navbar-brand-container">
            <Link href="/" className="navbar-brand fs-4 fw-bold">
              M.
            </Link>
          </div>

          <div class="navbar-list" id="navbarNav">
            <ul class="navbar-nav justify-content-end">
              <li class="nav-item">
                <Link href="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/" className="nav-link">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/" className="nav-link">
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/" className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
