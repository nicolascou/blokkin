import moment from 'moment';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react'
import { getComments } from '../services';

const Comments = ({ slug }) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
      getComments(slug)
        .then((result) => setComments(result))

    }, []);
    
    
    return (
        <>
            {comments.length > 0 && (
                <div className='bg-white shadow-lg rounded-lg p-8 mb-8 border-4 border-black'>
                    <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                        {comments.length}
                        {' '}
                        Comentarios
                    </h3>
                    {comments.map((comment) => (
                        <div key={comment.createdAt} className="border-b mb-4 last:mb-2 pb-4">
                            <p className='mb-4'>
                                <span className='font-semibold'> {comment.name} </span>
                                {' '} - {' '} {moment(comment.createdAt).format('MMM DD, YYYY')}
                            </p>
                            <p className='whitespace-pre-line text-gray-700 w-full'>
                                {parse(comment.comment)}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Comments