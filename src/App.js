import './App.css';
import Header from './components/Header/Header';
import Profile from './components/content/Profile/Profile';
import Dialogs from './components/content/Dialogs/Dialogs';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className="content" >
        <Route path='/profile' component={Profile}/>
        <Route path='/dialogs' component={Dialogs}/>
      </div>
    </div>
  )
}

export default App;
