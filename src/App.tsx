import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import OrganizadorCadastro from './pages/Org-cadastro';
import OrganizadorLogin from './pages/OrgLogin';
import { Esquecisenha } from './pages/Esquecisenha';
import './App.css';

function App() {
  return (
    <Routes>1
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/organizador-login" element={<OrganizadorLogin />} />
      <Route path="/organizador-cadastro" element={<OrganizadorCadastro />} />
      <Route path="/esqueci-senha" element={<Esquecisenha />} />
    </Routes>
  );
}

export default App;