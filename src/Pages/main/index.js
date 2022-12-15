import React from 'react'
import Card from '../../Components/Card'
import { Link } from 'react-router-dom'
import Line from './styles'

const Main = () => {
  return (
    <>
      <Line>
        <Link to="../info">
          <Card title={'Olá!'} gender={'Male'} name={'Tiago Dias'} old={'24 anos'} from={'Rio de Janeiro'} />
        </Link> 
        <Link to="../info">
          <Card title={'Linguagens:'} gender={'Male'} name={'HTML, CSS, JS, Python'} old={'Aprendedendo React!'} from={''} />
        </Link>
        <Link to="../info">
          <Card title={'Experiêcias:'} gender={'Male'} name={'Professor de Matemática'} old={'Técnico de Informática'} from={'Design'} />
        </Link>
      </Line>
    </>
  )
}
export default Main;