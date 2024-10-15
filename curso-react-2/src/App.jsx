// 2 reaproveitamento de estrutura
import { Outlet } from 'react-router-dom'

//4 navegando entre paginas
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import './styles/global.scss'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
