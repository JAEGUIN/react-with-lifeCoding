import logo from './logo.svg';
import './App.css';

function App() {
  const topics = [
    {id:1, title:'aa', body:'aa is aa'},
    {id:2, title:'bb', body:'bb is bb'},
    {id:3, title:'cc', body:'cc is cc'}
  ]
  return (
    <div className="App">
      <Header title="react study with jaeguin"></Header>
      <Article topics={topics}></Article>
    </div>
  );
}
function Header(props){
  console.log('props', props, props.title)
  return <header>
    <h1><a href='/'>{props.title}</a>    </h1>
  </header>
}
function Article(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
  return <article>
    <div>
        <p>
          {props.title}
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://github.com/JAEGUIN"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.body}
        </a>
        <p>
          {lis}
        </p>
    </div>
  </article>
}

export default App;
