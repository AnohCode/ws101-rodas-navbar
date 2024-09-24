import { Link, useMatch,useResolvedPath } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file





function NavBar() {
    return (
      <nav className="nav">
        <div className="navbar-name"><img src="KHRISTIANO.png" alt="Khristiano Logo" /></div>
      <ul className="navbar-links">
        <EditLink to = "/home">Home</EditLink>
        <EditLink to = "/about">About</EditLink>
        <EditLink to = "/contact">Contact</EditLink>
        
      </ul>
      </nav>
    );
  }
  
function EditLink({to,children,...props}){
  
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true});
    
    return(

    <li className={isActive ? 'active':""} data = {children}>
    <Link to = {to}{...props}> {children} </Link></li>
  )}





  export default NavBar;