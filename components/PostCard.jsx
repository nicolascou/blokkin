import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import 'moment/locale/es';

const PostCard = ({post}) => {

    return (
        <Link href={`/post/${post.slug}`}>
            <div className='bg-white shadow-lg rounded-lg p-8 border-4 border-black carta'>
                <div className='shadow-md h-52 mb-6'>
                    <img 
                        src={post.featuredImage.url} 
                        alt={post.title}
                        className='w-full object-cover h-full object-center shadow-lg rounded-t-lg lg:rounded-lg' 
                    />
                </div>
                <h1 className='carta__titulo text-center mb-8 whitespace-nowrap overflow-hidden text-xl font-semibold'>
                        {post.title}
                </h1>
                <div className='block text-center items-center justify-center w-full'>
                    <div className='flex items-center justify-center mb-4 w-full'>
                        <img 
                            alt={post.author.name}
                            height="30px"
                            width="30px"
                            className='align-middle rounded-full'
                            src={post.author.photo.url}
                            />
                        <p className='inline align-middle text-black ml-2 text-sm'> {post.author.name} </p>
                    </div>
                    <div className='text-sm text-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>
                            {moment(post.createdAt).format('DD MMMM YYYY')}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostCard
