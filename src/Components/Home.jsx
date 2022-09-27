import '../App.css';
import logo from '../logo.svg';

function Home(){
    return (
     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hello React</h1>
      </header>
    </div>
    )
}

export default Home;