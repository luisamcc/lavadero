import { Link } from "react-router-dom";

const NavBar = () =>{
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-primary">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="navbar-brand" to="#">
                    EDGA Solutions
                </Link>
              </li>  
              <li className="nav-item">  
                <Link className="nav-link" to={ '/nosotros' }>
                    <i></i>
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={ '/servicios' }>
                    <i></i>
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={ '/login' }>
                    <i></i>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
}


export default NavBar;