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
                <a href="#" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon className='h-8 w-8 px-3' icon={faFacebook}/>
                </a>
                <a href="#" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon className='h-8 w-8 px-3' icon={faInstagram}/>
                </a>
                <a href="https://www.notion.so/b286a101c2f84a33bfe9c6cf9c1d3600?v=8b2b17592e214b96b943e015c1a7d452" target='_blank' rel='noreferrer' className="px-3">
                    <img src="https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg" className='h-8 w-8'/>
                </a>
                <a href="https://github.com/skwogus98" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon className='h-8 w-8 px-3' icon={faGithub}/>
                </a>
            </div>
        </div>
    );
};

export default footer;