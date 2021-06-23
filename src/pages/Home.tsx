import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom'

import { auth, firebase } from '../services/firebase';

import illustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import googleIconImg from '../assets/google-icon.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';

export const Home: React.FC = () => {
  const history = useHistory();

  const handleCreateRoom = useCallback(() => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result => {
      console.log(result);
    });

    // history.push('/rooms/new')
  }, [history]);

  return (<div id="page-auth">
    <aside>
      <img src={illustrationImg} alt="ilustração" />
      <strong>Crie salas de Q&A ao-vivo</strong>
      <p>Tire as dúvidas da sua audiência em tempo-real</p>
    </aside>
    <main>
      <div className="main-content">
        <img src={logoImg} alt="Letmeask" />
        <button className="create-room" onClick={handleCreateRoom}>
          <img src={googleIconImg} alt="Google logo" />
          Crie sua sala com o Google</button>
        <div className="separator">ou entre em uma sala</div>
        <form >
          <input type="text" placeholder="Digite o código da sala" />
          <Button>Entrar na sala</Button>
        </form>
      </div>
    </main>
  </div>);
}