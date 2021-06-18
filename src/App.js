import { Router } from 'react-router-dom'
import Routes from './routes/routes.js'
import history from './services/history'
import './styles/App.css'

function App() {
  return (
    <div className='wrapper'>
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
