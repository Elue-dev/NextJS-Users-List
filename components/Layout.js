import React from 'react'
import Meta from '../components/Meta'
import Footer from './Footer'
import Nav from './Nav'

export const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Nav />
                <div>
                    {children}
                </div>
            <Footer />
        </>
    )
}
