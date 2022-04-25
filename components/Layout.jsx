import React from 'react'
import Header from './Header';

const Layout = ({children}) => {
    return (
        <div className='p-8'>
          <Header />        
          {children}
        </div>
    )
}

export default Layout