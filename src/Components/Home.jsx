import axios from 'axios';
import { useState } from 'react';
import '../App.css';
import Counter from './Counter';

function Home(){
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  const getData = () => {
    try{
      axios.get('todo-list')
      .then(res => {
        setData(res.data);
      })
    }catch(error){
      console.log(error)
    }
  };
    return (
     <div className="App">
      <header className="App-header">
        <Counter count={count}/>
        <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <button onClick={ getData }>
        Get Todo List
      </button>
      </header>
    </div>
    )
}

export default Home;