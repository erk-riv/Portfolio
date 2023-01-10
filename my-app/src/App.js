import logo from './logo.svg';
import './index.css';
import { Header } from '../src/header';
import { Body } from '../src/body';

function App() {
  return (
    <div>
        <div className="App">
          <Header />
        </div>
        <hr/>
        <div className="App">
          <Body />
        </div>
    </div>
  );
}

export default App;
