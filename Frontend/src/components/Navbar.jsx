import React from 'react'
import { Link } from 'react-router';
import './Navbar.css';
import { X } from 'lucide-react';
import { PlusIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className='logo-container'>
            <h1>ThinkBoard App</h1>
        </div>
        <div className="button-container">
            <button>
                <Link to="/create" className="create-note-link">
                    <PlusIcon /> Create Note
                </Link>
            </button>
        </div>
    </div>
  )
}

export default Navbar;
