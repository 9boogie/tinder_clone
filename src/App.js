import './App.css';
import Header from './Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            <h1>I am homepage</h1>
          </Route>
          <Route path='/chat'>
            <h1>I am that chatpage</h1>
          </Route>
        </Switch>
        <h1>Tinder Clone App</h1>

        {/* Header */}
        <Header />

        {/* Cards */}
        {/* Buttons below cards */}

        {/* Chats Screen */ }

      </Router>
    </div>
  );
}

export default App;
