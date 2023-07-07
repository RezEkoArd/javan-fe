import './App.css';
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import ResultContainer from './components/ResultContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        <main className="mt-5 p-10 w-full lg:flex gap-5  ">
          <CardList />
          <ResultContainer />
        </main>
    </div>
  );
}

export default App;
