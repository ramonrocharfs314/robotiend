import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './style.css'; // CSS para centralizar
import './index.css'; // CSS para centralizar

function Cadastro() {
  useEffect(() => {
    document.title = "Página de Cadastro";
  }, []);

  const [nome, setNome] = useState("")
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (nome.trim() === "" || usuario.trim() === "" || senha.trim() === "") {
      alert("Preencha todos os campos!")
    } else {
      alert(`Cadastro realizado com sucesso!\nBem-vindo: ${nome}`)
      navigate("/area-restrita")
    }
  }

  return (
    <div className="container">
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nome completo" 
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required 
        />
        <input 
          type="text" 
          placeholder="Digite seu e-mail ou telefone" 
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          pattern="^([0-9]{10,11}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$"
          required 
        />
        <input 
          type={showPassword ? 'text' : 'password'}
          placeholder="Digite sua senha" 
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required 
        />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{ marginLeft: '8px' }}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
        <button type="submit">Cadastrar</button>
      </form>

      <div className="social-login">
        <p>Ou cadastre-se com:</p>
        <a href="https://accounts.google.com/signup" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Google_Favicon_2025.svg" 
            alt="Cadastro com Google" 
            className="icon-btn"
          />
        </a>
        <a href="https://appleid.apple.com/account" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
            alt="Cadastro com Apple" 
            className="icon-btn"
          />
        </a>
      </div>
      <p>Já tem conta? <Link to="/">Voltar para Login</Link></p>
<div className="mt-4 text-center">
  <p className="text-sm">Área exclusiva para organizadores:</p>
  <Link to="/organizador-login" className="text-blue-500 hover:underline">
    Login de Organizador
  </Link>
  {" | "}
  <Link to="/organizador-cadastro" className="text-blue-500 hover:underline">
    Cadastro de Organizador
  </Link>
   <button
  className="home-button"
  onClick={() => window.location.href = 'https://outro-site.com'}>
  <img src="../assests/imagem.png" alt="Home" className="home-img" />
</button>
</div>
    </div>
  )
}

export default Cadastro