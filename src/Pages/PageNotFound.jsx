import React from 'react'
import error_image from '../assets/images/404.svg'

const PageNotFound = () => {
    return (
        <div id="error_page">
            <img src={error_image} />
        </div >
    )
}

export default PageNotFound