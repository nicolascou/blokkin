import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { menuToggle } from '../actions/menu';

const Responsive = () => {

    const { menuOn } = useSelector(state => state.menu);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch( menuToggle(!menuOn) );
    }
    
    return (
        <div className='cursor-pointer h-20 w-20 fixed zztop xl:hidden top-8 right-8 p-5 rounded-full shadow-lg border-4 border-black bg-white responsiveButton transition duration-800' onClick={ handleClick }>
            <div className={menuOn ? 'toggleResponsive' : undefined}>
                <span></span>
            </div>
        </div>
    )
}

export default Responsive