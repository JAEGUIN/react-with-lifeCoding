import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Article></Article>
    </div>
  );
}
function Header(){
  return <header>
    <h1><a href='/'>JAEGUIN</a>    </h1>
  </header>
}
function Article(){
  return <article>
    <div className="App">
        <p>
          Edit React Code with Jaeguin
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://github.com/JAEGUIN"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hi Jaeguin!
        </a>
    </div>
  </article>
}

export default App;
