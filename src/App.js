
import './App.css';
import SignUp from './signUp';
import Home from './Home';
import { useAuth } from './firebase';
import { getAuth } from 'firebase/auth';


function App() {
  const currentUser = useAuth();
  
  
  return (
    <div className="App">
      <header className="App-header">
        {currentUser?<Home />:<SignUp />}
      </header>
    </div>
  );
}

export default App;
