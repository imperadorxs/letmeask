import React from 'react';
import illustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const NewRoom: React.FC = () => {
  return (<div id="page-auth">
    <aside>
      <img src={illustrationImg} alt="ilustração" />
      <strong>Crie salas de Q&A ao-vivo</strong>
      <p>Tire as dúvidas da sua audiência em tempo-real</p>
    </aside>
    <main>
      <div className="main-content">
        <img src={logoImg} alt="Letmeask" />
        <h2>Criar uma nova sala</h2>

        <form >
          <input type="text" placeholder="Nome da sala" />
          <Button>Criar sala</Button>
        </form>
        <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
      </div>
    </main>
  </div>);
}