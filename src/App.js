import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="meme--section">
        <Meme />
      </section>
      
    </div>
  );
}

export default App;
