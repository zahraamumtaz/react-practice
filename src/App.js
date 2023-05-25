import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form />
      <Inline />
      <StyleSheet primary={true} />
      <NameList />
      <UserGreeting />
      <ParentComponent />
      <EventBind />
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
