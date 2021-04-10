import './App.css';
import SimpleCard from '../src/components/card-layout';

function App() {
  return (
    <div className="App">
      <div style={{'display':'flex'}}>
      <div style={{'display':'flex', 'flexDirection':'column'}}>
        <SimpleCard/>
        <SimpleCard/>
      </div>
      <SimpleCard/>
      </div>
    </div>
  );
}

export default App;
