import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getCategories } from '../services';

const Modal = () => {

    const { menuOn } = useSelector(state => state.menu);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);
    
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            </Head>
            <div className={menuOn ? 'w-screen h-screen centrar fixed bg-white z-50 opacity-80 2xl:hidden' : 'hidden'}></div>
            <div className={menuOn ? 'zztop fixed centrar-media w-2/3 h-2/4 2xl:hidden' : 'hidden'}>
                <div className='rounded-2xl border-black border-4 shadow-lg bg-white p-4 md:p-8 text-center 
                                animate__animated animate__fadeInLeft'>
                    <h2 className='border-b-2 border-black font-semibold mb-8 p-4 text-xl'>Categorías</h2>
                    <ul>
                        {categories.map((category) => (
                            <Link key={category.slug} href={`/category/${category.slug}`}>
                                <li className='category mx-auto cursor-pointer block mb-6 w-fit list-none'>
                                    {category.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Modal