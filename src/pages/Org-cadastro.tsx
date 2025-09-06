import { useEffect, useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import './style.css'; // CSS para centralizar
import './index.css'; // CSS para centralizar

function OrganizadorCadastro() {
  useEffect(() => {
    document.title = "Página de Cadastro - Organizador";
  }, []);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nome || !email || !senha) {
      alert("Preencha todos os campos!");
    } else {
      alert(`Cadastro realizado com sucesso!\nBem-vindo, ${nome}!`);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Cadastro de Organizador</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do organizador"
          className="input"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit" className="button">
          Cadastrar
        </button>
      </form>

      <div className="social-login">
        <p>Ou cadastre-se com:</p>
        <a
          href="https://accounts.google.com/signup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Google_Favicon_2025.svg"
            alt="Cadastro com Google"
            className="icon-btn"
          />
        </a>
        <a
          href="https://appleid.apple.com/account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Cadastro com Apple"
            className="icon-btn"
          />
        </a>
      </div>

      <p>
        Já tem conta?{" "}
        <Link to="/organizador-login">Ir para Login de Organizador</Link>
      </p><p className="text-sm">Área de Retorno para cliente:</p>
      <Link to="/cadastro" className="text-blue-500 hover:underline">Cadastro</Link>
      <button
          className="home-button"
          onClick={() => window.location.href = 'https://outro-site.com'}
        ></button>
    </div>
  );
}

export default OrganizadorCadastro;
