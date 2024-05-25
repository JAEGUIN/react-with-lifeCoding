import { useState } from 'react';
import './App.css';


function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}
function Header(props){
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}
function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
    </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function App() {
  // const _mode = useState('welcome');
  // console.log('_mode : ',_mode);
  // const mode = _mode[0];
  // const setMode = _mode[1];
  //setMode로 앱 컴포넌트가 다시 실행됨
  const[mode, setMode] = useState('welcome');
  const[id, setId] = useState(null);
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
    {id:4, title:'jaeguin', body:'jaeguin is ...'}
  ] 
  let content = null;
  if(mode === 'welcome'){
    content = <Article title='welcome' body='hi jaeguin'></Article>
  }else if(mode === 'read'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      console.log(topics[i].id, id);
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        // alert('Header');
        setMode('welcome');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        // alert(id);
        setMode('read');
        setId(_id);
      }}></Nav>
      {/* <Article title="Welcome" body="Hello, JAEGUIN"></Article> */}
      {content}
    </div>
  );
}

export default App;