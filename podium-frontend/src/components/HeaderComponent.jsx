import React from 'react'

//Navbar is imported from bootstrap here
const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-dark bg-dark'>
                <a className="text-center navbar-brand" href = "https://javaguides.net">Manage Users</a>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent