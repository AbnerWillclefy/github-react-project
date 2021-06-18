import { Router } from 'react-router-dom'
import { UserProvider } from './context/user.js';
import Routes from './routes/routes.js'
import history from './services/history'
import './styles/App.css'

function App() {
  return (
    <UserProvider>
      <div className='wrapper'>
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
