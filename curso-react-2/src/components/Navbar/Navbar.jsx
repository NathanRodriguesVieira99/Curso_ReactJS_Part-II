import { Link } from "react-router-dom"

import './_Navbar.scss'

function Navbar() {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"login"}>Login</Link>
      <Link to={'contacts'}>Contatos</Link>
    </nav>
  )
}

export default Navbar