import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css'; // CSS para centralizar
import './index.css'; // CSS para centralizar

function OrganizadorLogin() {
  useEffect(() => {
    document.title = "Página de Login - Organizador";
  }, []);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !senha) {
      alert("Preencha todos os campos!");
    } else {
      alert(`Login realizado com sucesso!\nBem-vindo, ${email}!`);
      // Aqui você pode adicionar navegação ou lógica extra
    }
  };

  return (
    <div className="container">
      <h1 className="title">Login de Organizador</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email do organizador"
          className="input"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          className="input"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          required
        />
        <button type="submit" className="button">
          Entrar
        </button>
      </form>
      <div className="social-login">
        <p>Ou entre com:</p>
        <a href="https://accounts.google.com/signin" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Google_Favicon_2025.svg" 
            alt="Login com Google" 
            className="icon-btn"
          />
        </a>
        <a href="https://appleid.apple.com/sign-in" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
            alt="Login com Apple" 
            className="icon-btn"
          />
        </a>
      </div>
      <p>Não tem conta? <Link to="/organizador-cadastro">Ir para Cadastro e Organizador</Link></p>
      <p className="text-sm">Área de Retorno para cliente:</p>
      <Link to="/" className="text-blue-500 hover:underline">Login</Link>
      <button
       className="home-button"
      onClick={() => window.location.href = 'https://outro-site.com'}>
      <img src="../assests/imagem.png" alt="Home" className="home-img" />
    </button>
    </div>
  );
}

// ...existing code...
export default OrganizadorLogin;
// ...existing code...