import React, { useEffect, useRef, useState } from 'react'
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {

    const [error, setError] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

    useEffect(() => {
        nameEl.current.value = window.localStorage.getItem('name');
        emailEl.current.value = window.localStorage.getItem('email');
    }, [])

    const handleCommentSubmission = () => {
        setError(false);

        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { checked: storeData } = storeDataEl.current;
        
        if(!comment || !name || !email){
            setError(true);
            return;
        }

        const commentObj = {name, email, comment, slug};

        if(storeData){
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        } else{
            window.localStorage.removeItem('name', name);
            window.localStorage.removeItem('email', email);
        }

        submitComment(commentObj)
            .then((res) => {
                setShowSuccessMessage(true);

                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 3000)
            })
    }
    
    return (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 border-4 border-black'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Escribe un comentario</h3>
            <div className='grid grid-cols-1 gap-4 mb-4'>
                <textarea 
                    ref={commentEl} 
                    className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-black bg-gray-100 text-black"
                    placeholder='Comentario'
                    name='comment'
                />
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 mb-4'>
                <input 
                    type="text" ref={nameEl}
                    className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-black bg-gray-100 text-black"
                    placeholder='Nombre'
                    name='name'
                />
                <input 
                    type="text" ref={emailEl}
                    className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-black bg-gray-100 text-black"
                    placeholder='Email'
                    name='email'
                />
            </div>
            <div className='grid grid-cols-1 gap-4 mb-4'>
                <div>
                    <input type="checkbox" id='storeData' name='storeData' value="true" ref={storeDataEl} />
                    <label className='text-gray-500 cursor-pointer ml-2' htmlFor='storeData'>Recordar mi e-mail y nombre</label>
                </div>
            </div>
            {error && <p className='text-xs text-red-500'>Todos los campos son requeridos</p>}
            <div className='mt-8'>
                <button 
                    type='button' 
                    onClick={handleCommentSubmission}
                    className="transition duration-300 ease hover:bg-white hover:ring-2 hover:ring-black hover:text-black inline-block bg-black text-lg rounded-full text-white px-8 py-3 cursor-pointer"
                >
                    Publicar comentario
                </button>
                {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comentario enviado a revisión</span>}
            </div>
        </div>
    )
}

export default CommentsForm