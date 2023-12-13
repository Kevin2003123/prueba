import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand"  to={"/"}>
    <i className="fa-solid fa-address-book"></i>
    </Link>
    <Link to="/create">
    <button className='btn btn-primary mr-auto'>Add contact</button>
    </Link>
  </div>
</nav>
  )
}

export default Navbar