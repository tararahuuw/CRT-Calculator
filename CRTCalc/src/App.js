import logo from './logo.svg';
import './App.css';
import FormCalc from './components/FormCalc';

function App() {
  return (
    <div className="App">
      <div class="animation-area">
		    <ul class="box-area">
          <FormCalc />
			    <li></li>
			    <li></li>
			    <li></li>
			    <li></li>
			    <li></li>
			    <li></li>
		    </ul>
	    </div>
    </div>
  );
}

export default App;
