import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faFacebook, faInstagram, faGithub, 
  } from '@fortawesome/free-brands-svg-icons'

const footer = () => {
    return (
        <div className='items-center justify-center border-t-2 border-gray-100 py-6 mt-5 md:justify-start '>
            <div className='flex items-center justify-center'>
                <a className='px-5' href="#">about</a>
                <a className='px-5' href="#">about</a>
                <a className='px-5' href="#">about</a>
            </div>
            <div className='flex items-center justify-center py-5'>
                <a href="#">
                    <FontAwesomeIcon className='h-12 w-12 px-5' icon={faFacebook}/>
                </a>
                <a href="#">
                    <FontAwesomeIcon className='h-12 w-12 px-5' icon={faInstagram}/>
                </a>
                <a href="#" className="px-5">
                    <img src="https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg" className='h-12 w-12'/>
                </a>
            </div>
        </div>
    );
};

export default footer;