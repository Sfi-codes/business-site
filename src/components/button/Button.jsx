import './button.css'
import {Link, Route, Routes} from 'react-router-dom'

const Button = (props) => {

const path = `/${props.link}`

  return <div> <Link to={path}> <button>{props.text}</button></Link>
        <Routes>
          <Route path ={path} element={props.element} />
        </Routes></div>
  
}

export default Button