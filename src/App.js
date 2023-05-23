import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";

function App() {
  return (
    <div className="App">
      <FunctionClick />
      <Counter />
      <Message />
      <Hello name="Diana" heroName="Wonder Women">
        <p>This is children props</p>
      </Hello>
      <Greet name="Bruce" heroName="Batman">
        <button>Action</button>
      </Greet>
      <Welcome name="Clark" heroName="Super Man" />
    </div>
  );
}

export default App;
