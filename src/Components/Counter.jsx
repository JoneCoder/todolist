import logo from '../logo.svg';

function Counter(props){
    return(
        <div>
            <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hello React { props.count }</h1>
        </div>
    )
}

export default Counter;