import logo from './logo.svg';
import './App.css';

function App() {
  const mode = 'read';
  let content = null;
  if(mode === 'welcome'){
    content = <Article title="welcome" body="hi, jaeguin"></Article>
  }else if(mode === 'read'){
    content = <Article title="read" body="read, jaeguin"></Article>
  }
  return (
    <div className="App">
      <Header title="react study with jaeguin" onChangeMode={function(){
        alert('jaeguin clicked');
      }}></Header>
      {/* <Article topics={topics}></Article> */}
      {content}
    </div>
  );
}
function Header(props){
  console.log('props', props, props.title)
  return <header>
    <h1><a href='/' onClick={function(event){
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a>    </h1>
  </header>
}
function Article(props){
  return <article>
    <div>        
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>
          {props.title}
        </h1>
        <h3>
          {props.body}
        </h3>

        <a
          className="App-link"
          href="https://github.com/JAEGUIN"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.body}
        </a>

    </div>
  </article>
}

export default App;
