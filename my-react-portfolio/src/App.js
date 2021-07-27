import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './pages/contact';
import Home from './pages/home';
import Projects from './pages/projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Contacts/>
      <Home/>
      <Projects/>
    </div>
  );
}

export default App;
