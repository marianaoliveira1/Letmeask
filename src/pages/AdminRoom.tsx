import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';
import deletImg from '../assets/images/delete.svg';

import { Button } from '../components/Button';
import { Question } from '../components/Questions';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';

import '../styles/room.scss';

type RoomParams = {
  id: string;
}
export function AdminRoom() {
    const { user } = useAuth();
    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('');
    const roomId = params.id;
    const {questions, title} = useRoom(roomId);
  
    async function handleDeleteQuestion() {
      if(window.confirm('Tem certeza que deseja excluir essa pergunta?')) {
        await database.ref(`rooms/${roomId}/questions/${questions}`).remove();
      }
    }
  
    return (
      <div id="page-room">
        <header>
          <div className="content">
            <img src={logoImg} alt="Letmeask" />
            <div>
            <RoomCode code={roomId} />
            <Button isOutline>Encerrar sala</Button>
            </div>
          </div>
        </header>
  
        <main>
          <div className="room-title">
            <h1>Sala {title}</h1>
            { questions.length > 0 && <span>{questions.length} pergunta(s)</span> }
          </div>

          <div className="question-list">
            {
              questions.map(questions => {
                return (
                  <Question
                    key={questions.id}
                    content={questions.content}
                    author={questions.author}>
                    <button type='button'
                      onClick={() => handleDeleteQuestion()}
                    >
                        <img src={deletImg} alt='deletar pergunta' />
                    </button>
                  </Question>

                )
              })
            }
          </div>
        </main>
      </div>
    );
  }