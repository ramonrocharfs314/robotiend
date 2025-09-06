import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração do Vite para React + TypeScript
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // permite acessar pelo IP da rede local (bom para testes em celular)
    port: 5173,   // porta padrão
    open: true    // abre o navegador automaticamente
  }
})
