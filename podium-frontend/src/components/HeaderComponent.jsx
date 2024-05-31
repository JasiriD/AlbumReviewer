import React from 'react'

//Navbar is imported from bootstrap here
const HeaderComponent = () => {
  return (
    <div>
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/users">Users</a>
              </li>
            </ul>
          </div>
        </nav>
        </header>
    </div>
  )
}

export default HeaderComponent