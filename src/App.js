// import logo from './logo.svg';
// import './App.css';
import Home from './pages';
//  import Header from "./components/header";
import Header from "./components/header.js";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>hello</h1>
        <h2>{2+3}</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
  
      </header> */}
      <Header/>
      <Home/>
      
    </div>
  );
}

export default App;
