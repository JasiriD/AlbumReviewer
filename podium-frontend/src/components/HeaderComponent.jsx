import React from 'react'

//Navbar is imported from bootstrap here
const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-dark bg-dark'>
                <a className="navbar-brand" href = "https://javaguides.net">Podium</a>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent