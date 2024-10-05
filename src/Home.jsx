import React from 'react'

function Home() {

    const logout = () => {
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className=''>
            <h1 className=''>Selamat datang {localStorage.getItem('name')}</h1>
            <div className=''>Mulai Quiz?</div>
            <div className=''>
                <button onClick={logout} className=''>Log Out</button>
                <button onClick={deleteAccount} className=''>Delete</button>
            </div>
        </div>
    )
}

export default Home
