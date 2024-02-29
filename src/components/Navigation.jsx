import { Link, useLocation } from 'react-router-dom';


export default function Navigation() {

  const currentPage = useLocation().pathname;

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ps-5" data-bs-theme="dark">
        <div className="container-fluid ">
          <div className="collapse navbar-collapse d-flex flex-row-reverse me-5" id="navbarNav">
            <ul className="navbar-nav nav-underline">
              <li className="nav-item">
              <Link
                  to="/"
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
               Home
            </Link>
              </li>
              <li className="nav-item">
              <Link
                to="/About"
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
              >
              About
             </Link>
              </li>
              <li className="nav-item">
              <Link
              to="/Contact"
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
              >
            Contact
            </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}