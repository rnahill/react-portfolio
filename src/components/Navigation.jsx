
export default function Navigation() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ps-5" data-bs-theme="dark">
        <div className="container-fluid ">
          <div className="collapse navbar-collapse d-flex flex-row-reverse me-5" id="navbarNav">
            <ul className="navbar-nav nav-underline">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}