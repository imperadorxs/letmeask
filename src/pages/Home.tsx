import React, { FormEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom'


import illustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import googleIconImg from '../assets/google-icon.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';

import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

export const Home: React.FC = () => {
  const { user, signInWithGoogle } = useAuth();
  const history = useHistory();

  const [roomCode, setRoomCode] = useState('');

  const handleCreateRoom = useCallback(async () => {
    if (!user) {
      await signInWithGoogle();
    }
    history.push('/rooms/new');
  }, [history, signInWithGoogle, user]);

  const handleJoinRoom = useCallback(async (event: FormEvent) => {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      console.log('Room does not exists');
      return;
    }

    history.push(`/rooms/${roomCode}`);

  }, [history, roomCode]);

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
        <form onSubmit={handleJoinRoom}>
          <input type="text" placeholder="Digite o código da sala"
            onChange={event => setRoomCode(event.target.value)} value={roomCode} />
          <Button>Entrar na sala</Button>
        </form>
      </div>
    </main>
  </div>);
}