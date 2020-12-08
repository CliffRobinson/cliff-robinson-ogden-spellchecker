import logo from './logo.svg';
import './App.css';

//CFR Comment 1: The app as described has no need to access a backend, 
//I'd like to have a browser GUI if possible, and React is my framework of choice,
//so create-react-app is a great place to start. 
//I like to practise TDD where possible, so let's get Enzyme set up for snapshots next. 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
