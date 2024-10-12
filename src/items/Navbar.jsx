import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function Navbar() {

    const [inProp, setInProp] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        setInProp(true);
    }, []);

    const logout = () => {
        Swal.fire({
            title: "You sure wanna Log Out ?",
            showCancelButton: true,
            confirmButtonText: "Log Out",
            customClass: {
                confirmButton: 'red-button',  
                cancelButton: 'cancel-button'     
            }
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("signUp")
                localStorage.removeItem("quizState")
                navigate("/login")
            } else { }
        });
    }

    return (
        <div className='flex items-center justify-between w-full px-3 py-2'>
            <CSSTransition
                in={inProp}
                classNames="slide"
                timeout={900}
                unmountOnExit
            >
                <div className='text-[5vh] sm:text-[6vh] md:text-[7vh] font-nunito font-bold'>
                    It's Qui<span className='text-[#7EC5DB]'>zz</span>os
                </div>
            </CSSTransition>
            <button onClick={logout} className='px-3 mb-3 text-sm font-medium sm:px-5 sm:text-base'>Log Out</button>
        </div>
    )
}

export default Navbar
