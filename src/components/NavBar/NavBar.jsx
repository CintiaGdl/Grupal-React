import React from 'react'

export default function NavBar() {
  return (
    <nav>
        <div className='nav-container'>
            <div className='img'>
            <img src="./logo.jpg" alt="logo" />
            </div>
            <div className='login-container'>
                <div className='login-container__item login'> 
                    <h3>INICIAR SESIÓN</h3>
                </div>
                <div className='login-container__item register'>
                    <h3>REGISTRARSE</h3>
                </div>
            </div>
        </div>
    </nav>
  )
}
