import logo from './logo.svg';
import './App.css';
import AppBar from './Components/appBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Views/home';
import Movies from './Views/movies';

function App() {
  return (
    <main>
       <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movies" component={Movies} />
        <Route component={Error} />
      </Switch>
      </Router>
    </main>
  );
}

export default App;
