import './App.css';
import Counter from './component/Count';
import {useDispatch} from 'react-redux'

function App() {

  const dispatch = useDispatch();
  return (
    <div className="App">
   <button onClick={e => dispatch({type : 'INCREAMENT'})}>Increament</button>
   <Counter/>
   <button onClick={e => dispatch({type : 'DECREAMENT'})}>Decreament</button>
    </div>
  );
}

export default App;
