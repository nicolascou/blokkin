import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/img/logo.png'

const Header = () => {
    
    return (
        <div className='container w-2/3 m-auto px-10 mb-8 text-center bg-white rounded-2xl border-4 border-black shadow-2xl'>
            <div className='w-full md:w-2/3 lg:w-2/4 inline-block py-8 px-2'>
                <Link href="/">

                    <div className='border-b-4 p-2 border-black w-full'>
                        <Image 
                            src={ logo }
                            alt="Logo" 
                            className='cursor-pointer'
                            width='329px' 
                            height='65px' 
                        />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header