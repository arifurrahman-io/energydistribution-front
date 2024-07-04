import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { authState, logout } = useContext(AuthContext);
  const { user } = authState;

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link to="/" className='text-white'>Logo</Link>
        </div>
        <ul className="flex space-x-4 items-center">
          <li><Link to="/" className='text-white'>Home</Link></li>
          <li><Link to="/about" className='text-white'>About</Link></li>
          <li><Link to="/services" className='text-white'>Services</Link></li>
          <li><Link to="/products" className='text-white'>Products</Link></li>
          <li><Link to="/guides-blogs" className='text-white'>Guides/Blogs</Link></li>
          <li><Link to="/contact" className='text-white'>Contact</Link></li>
          {user ? (
            <>
              <li><Link to={user.role === 'admin' ? "/admin-dashboard" : "/client-dashboard"} className='text-white'>Dashboard</Link></li>
              <li><button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={logout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login" className='text-white'>Login</Link></li>
              <li><Link to="/register" className='text-white'>Register</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

