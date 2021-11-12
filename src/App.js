import Navbar from "./components/navbar/Navbar"
import './App.css';
import Body from "./components/body/Body"
import "react-toggle/style.css";
import Tab from "./components/TabComponent/Tab"
import Body2 from "./components/Body2/Body2"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Tab />
      <Body />
      <Body2 />
    </div>
  );
}

export default App;
