import React from 'react'
import gif from '../../Assets/gif.gif'
import { Container } from './styles'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <Container>
        <div className='header'>
            <img src={gif} alt='' className='Gif'></img>
            <Link to = '/'>
              <button className='btn'>Emergence Button!</button>
            </Link>  
        </div>
    </Container>
  )
}

export default Header