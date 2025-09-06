import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // CSS para centralizar
import './index.css'; // CSS para centralizar

export function Esquecisenha() {
  const [email, setEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [token, setToken] = useState<string>(''); // token recebido por e-mail

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Aqui você chamaria a API para resetar a senha com email, token e nova senha
    console.log('Resetar senha:', { email, token, newPassword });
  };

  return (
    <div className="container">
      <h2>Recuperar Senha</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input 
            type="email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            required 
          />
        </label>
        <br />
        <label>
          Token (enviado por email):
          <input 
            type="text" 
            value={token}
            onChange={e => setToken(e.target.value)}
            required 
          />
        </label>
        <br />
        <label>
          Nova Senha:
          <input 
            type="password" 
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            required 
          />
        </label>
        <br />
        <button type="submit">Criar Nova Senha</button>
      </form>
      <p className="text-sm">Área de Retorno para Login:</p>
      <Link to="/" className="text-blue-500 hover:underline">Login</Link>
    </div>
  );
}
