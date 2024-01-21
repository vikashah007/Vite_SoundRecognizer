import { Link } from "react-router-dom"
function Navbar(){
    return(<>
        <header className="p-3 navbar" style={{backgroundColor:"#403c47"}}>
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
          <li><Link to="/About" className="nav-link px-2 text-white">About Us</Link></li>
        </ul>

      </div>
    </div>
  </header>
        </>)
}
export default Navbar