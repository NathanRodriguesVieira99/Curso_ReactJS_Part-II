import { useParams, useNavigate } from "react-router-dom"

function ContactsDetails() {
  const { id } = useParams();

  // 6 redirect
  const navigate = useNavigate()

  const handleContacts = () => {
    console.log('contato enviado')
    return navigate('/')
  }

  return (
    <div>
      <h1>Exibindo mais informações do contato: {id}</h1>
      <button onClick={handleContacts}>Enviar Mensagem</button>
    </div>
  )
}

export default ContactsDetails