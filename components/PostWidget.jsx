import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services';


const PostWidget = ({categories, slug}) => {
    
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [isRelated, setIsRelated] = useState(true)

    useEffect(() => {
        if(slug){
            setIsRelated(true);
            getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        } 
        if (relatedPosts.length === 0) {
            setIsRelated(false);
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }
    }, [slug])

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8 border-4 border-black'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                { isRelated ? 'Posts relacionados' : 'Posts recientes' }
            </h3>
            {relatedPosts.map((post) => (
                <div key={post.title} className='flex items-center w-full mb-8 last:mb-4'>
                    <div className='w-16 flex-none'>
                        <img 
                            src={post.featuredImage.url} 
                            alt={post.title} 
                            width="60px"
                            height="60px"
                            className='align-middle rounded-full'
                        />
                    </div>
                    <div className='flex-grox ml-4'>
                        <p className='text-gray-500 font-xs'>
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                        <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
                            {post.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostWidget
