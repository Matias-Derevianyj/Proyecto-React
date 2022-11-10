import CartWidget from './CartWidget'
import logo from '../logo.svg'
import Link from './Link';
const Navbar = () => {
  return (
    <div className='navBar'>
      <div className='content-img'>
        <Link to={''}><img src={logo} alt="logo"/></Link>
      
        
      </div>
    <div className='list-menu'>
      <ul>
          <li><Link to='/page/1'>Zapatillas</Link></li>
          <li><Link to='/page/2'>Remeras</Link></li>
          <li><Link to='/page/3'>Accesorios</Link></li>
      </ul>
    </div>

    <CartWidget/>
    </div>
  )
}

export default Navbar
