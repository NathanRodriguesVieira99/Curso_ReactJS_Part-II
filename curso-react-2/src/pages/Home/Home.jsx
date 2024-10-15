import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  const handleLogin = () => {
    console.log('clicou em login');
    return navigate('login')
  }

  return (
    <div style={{ backgroundColor: 'blue', width: '100%', height: '100vh', display: 'flex', alignItems: 'flex-start', gap: '10px', justifyContent: 'center', }}>
      <h1 style={{ marginTop: '1rem' }}>Home</h1>
      <button style={{ marginTop: '1.8rem' }} onClick={handleLogin}>fazer login</button>
    </div>
  )
}

export default Home