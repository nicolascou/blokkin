import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Modal from './Modal';
import Responsive from './Responsive';

const Layout = ({children}) => {
    return (
        <div className='p-8 relative'>
          <Header />
          <Responsive /> 
          <Modal />
          {children}
          <Footer />
        </div>
    )
}

export default Layout