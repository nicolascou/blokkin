import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    
    return (
        <div className='container w-2/3 m-auto px-10 mb-8 text-center bg-white rounded-2xl border-4 border-black shadow-2xl'>
            <div className='w-1/3 inline-block py-8'>
                <div className='block'>
                    <Link href="/">
                        <div className='border-b-4 p-2 border-black'>
                            <Image 
                                src={'/../public/img/logo.png'}
                                alt="Logo" 
                                className='cursor-pointer'
                                width='329px' 
                                height='65px' 
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header