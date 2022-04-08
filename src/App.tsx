import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';

function App() {
  return (
    <BrowserRouter>
        <AuthContextProvider>
          <Route path="/" exact component={Home} />
        <Route path="/rooms/news" exact component={NewRoom} />
        <Route path="/rooms/:id" component={Room} />
        </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
