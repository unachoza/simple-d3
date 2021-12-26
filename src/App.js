import './App.css';
import LineChart from './Components/LineChart/LineChart';
import Circle from './Components/Circle/Circle';
import MouseCircle from './Components/Circle/MouseCircle'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header section">
        Arianna Choza Learns D3 Finally<br></br>
        She really needs to learn testing next
        <div>
          <LineChart />
        </div>
      </header> */}
      <div className="section">
        <MouseCircle/>
        {/* <Circle/> */}
      </div>
    </div>
  );
}

export default App;
