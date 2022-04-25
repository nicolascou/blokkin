import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { getCategories } from '../services'

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);
    
    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8 border-4 border-black'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                Categorías
            </h3>
            <div className='overflow-hidden'>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='category mx-5 cursor-pointer block mb-6 w-fit'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Categories
