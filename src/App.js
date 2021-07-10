import Intro from './components/Intro'
import Footer from './components/Footer'
import MoagCoin from './components/moagCoin'
import Timetable from './components/Timetable'
import DiscordBot from './components/DiscordBot'
import Nav from './components/Nav'

import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route path="/" exact component={Intro} />
          <Route path="/MoagCoin" component={MoagCoin} />
          <Route path="/Timetable" component={Timetable} />
          <Route path="/DiscordBot" component={DiscordBot} />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
