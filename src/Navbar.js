import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar
() {
  return (
    <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="search">Search</Link>
        <br />
        <Link to="history">History</Link>
    </div>
  )
}
