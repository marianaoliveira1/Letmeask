import { useHistory} from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';

export function Home() {
    const history = useHistory();

    function navigateTpNewRoom() {
        history.push('/rooms/news');
    }

    return (
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt ="ilustração de pergunta e respostas"/>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="imagem do logo"/>
                    <button onClick={navigateTpNewRoom} className='create-room'>
                    <img src={googleImg} alt="logo do google"/>
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>ou entre em uma sala</div>
                    <form>
                        <input type="text"
                        placeholder="digite o código da sala"
                       />
                       <Button type='submit'>Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}