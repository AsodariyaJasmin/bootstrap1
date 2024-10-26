import { Provider } from 'react-redux';
import './App.css';
import Demo1 from './Demo1';

function App() {
  return (
    <div className="App">
      <Provider>
      <Demo1/>
      </Provider>
    </div>
  );
}

export default App;
