
import './App.css';
import Indicator from './component/Indicator';

function App() {
  let URL ="https://dummyjson.com/products"
  return (
    <div className="App">
      <Indicator URL={URL}/>
    
    </div>
  );
}

export default App;
