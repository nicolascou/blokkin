import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    
    return (
        <div className='container m-auto px-10 mb-8 text-center'>
            <div className='border-b border-x w-full inline-block border-black bg-white py-8'>
                <div className='block'>
                    <Link href="/">
                        <Image 
                            src='/../public/img/logo.png' 
                            alt="Logo" 
                            className='logo-portada cursor-pointer'
                            width='329px' 
                            height='65px' 
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header