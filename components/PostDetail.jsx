import React from 'react'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer'

const PostDetail = ({ post }) => {
    
    return (
        <div className='bg-white shadow-xl rounded-lg p-2 md:p-8 pb-12 mb-10 border-black border-4'>
            <div className='relative overflow-hidden rounded-lg shadow-xl mb-10'>
                <img 
                    src={post.featuredImage.url} 
                    alt={post.title}
                    className='object-top h-full w-full rounded-lg' 
                />
            </div>
            <div className='px-4 xl:px-0'>
                <div className='flex items-center mb-8 w-full'>
                    <div className='flex items-center mb-4 xl:mb-0 w-full xl:w-auto mr-8'>
                        <img 
                            alt={post.author.name}
                            height="30px"
                            width="30px"
                            className='align-middle rounded-full'
                            src={post.author.photo.url}
                        />
                        <p className='inline align-middle text-gray-700 ml-2 text-lg'> {post.author.name} </p>
                    </div>
                    <div className='font-medium text-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </span>
                    </div>
                </div>
                <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
                <div className="contenido">
                    <RichText content={post.content.raw.children} />
                </div>
            </div>
        </div>
    )
}

export default PostDetail