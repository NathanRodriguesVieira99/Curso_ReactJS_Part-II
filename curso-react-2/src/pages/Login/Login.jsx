import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate();

  const handleBackHome = () => {
    console.log('clicou para voltar pra home');
    return navigate('/')
  }


  return (
    <div style={{ backgroundColor: 'green', width: '100%', height: '100vh', display: 'flex', alignItems: 'flex-start', gap: '10px', justifyContent: 'center' }}>
      <h1 style={{ marginTop: '1rem' }}>Login</h1>
      <button style={{ marginTop: '1.8rem' }} onClick={handleBackHome}>voltar para home</button>
    </div>
  )
}

export default Login