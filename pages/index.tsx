import type { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faFacebook, faInstagram, faGithub, 
  } from '@fortawesome/free-brands-svg-icons'

const Home: NextPage = () => {
  return (
    <div>
      <div className='text-5xl py-10'>MyLog</div>
      <a href="https://github.com/skwogus98" target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faGithub} className="h-12 w-12"/>
      </a>
      <a href="https://www.notion.so/b286a101c2f84a33bfe9c6cf9c1d3600?v=8b2b17592e214b96b943e015c1a7d452" target='_blank' rel='noreferrer'>
        <img src="https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg" className='h-12 w-12'/>
      </a>
    </div>
  )
}

export default Home