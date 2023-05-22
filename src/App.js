import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Hello name="Diana" />
      <Greet name="Bruce" />
      <Welcome name="Clark" />
    </div>
  );
}

export default App;
