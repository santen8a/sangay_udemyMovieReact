import { useNavigate, Link, useParams } from "react-router-dom";
const Navbar = ({ searchText, setSearchText }) => {

  const navigate = useNavigate()
  const { keywordSlug } = useParams()

  const updateSearchText = (e) => {
    console.log(e.target.value)
    navigate('/search')
    setSearchText(e.target.value)
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">MovieBrowser</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Coming Soon
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</Link>
              </li>
            </ul>
            <span className="d-flex" action="/search" method="get">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={updateSearchText}></input>
              <button className="btn btn-outline-success" onClick={updateSearchText}>Search</button>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;