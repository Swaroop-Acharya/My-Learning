import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro1';
import Intro3 from './components/Intro1';
import Footer from './components/Footer';
function App() {
  return (
    <div>
        <Nav /><Intro1 name="Swaroop" /><Intro2 /><Intro3 /><Footer name="Swaroop"/>
    </div>
   
  );
}

export default App;
