import React, { useState } from 'react';

function Header() {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const links = [
    {
      name: 'Introduction',
      id: '#summary'
    },
    //{
    //  name: 'Experience',
    //  id: '#experience'
    //},
    {
      name: 'Skills',
      id: '#skills'
    },
    {
      name: 'Professional Experience',
      id: '#experience'
    },
    //{
    //  name: 'Leetcode',
    //  id:'https://leetcode.com/u//',
    //},
    {
      name: 'Education',
      id: '#education'
    },
    {
      name: 'Research Experience',
      id: '#research'
    },
    {
      name: 'Projects',
      id: '#academic-projects'
    },
    {
      name: 'Awards',
      id: '#honors-and-activities'
    },
    {
      name: 'Leadership',
      id: '#leadership'
    },
    {
      name: 'Contact',
      id: 'mailto:vakil.vishal17@gmail.com'
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/#">VISHAL VAKIL</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {links.map((link, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={link.id} onClick={handleNavCollapse}>{link.name}</a>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
