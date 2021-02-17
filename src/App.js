import './App.css';
import Header from './Header/Header';
import TinderCards from './TinderCards/TinderCards';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeButtons from './SwipeButtons/SwipeButtons';
import Chats from './Chats/Chats';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/chat'>
            <Header backButton='/' />
            <Chats />
          </Route>
          <Route path='/'>
            <Header />  
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
