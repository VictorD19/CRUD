import { Link } from "react-router-dom";
import './style.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
       
        <Link className="navbar-brand" to='/'>My Crud</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
       
          <div className='navbar-nav' >
          <Link className="nav-link" to="/">
              Criar Usuario
            </Link>
          
            <Link className="nav-link " aria-current="page" to="/list">
              Lista Usuarios
            </Link>
            <Link className="nav-link" to="/edit">
              Editar Usuario
            </Link>
            
           
           
          </div>
          
        </div>
    
    </nav>
  );
};
// active
export default Navbar;
