import './App.css';
import {Route, Routes} from "react-router-dom";
import Nav from "./Nav"
import DogList from "./DogList";
import DogDetails from "./DogDetails";


function App({dogs}) {

  return (
    <div className="App">
      <Nav dogs={dogs}/>
      <Routes>
            <Route exact path="/dogs" element={<DogList dogs={dogs}/>}/>
            <Route exact path="/dogs/:name" element={<DogDetails dogs={dogs}/>}/>
            <Route exact path="/dogs"/>
        </Routes>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "whiskey.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "duke.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "perry.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    }
  ]
}

export default App;
