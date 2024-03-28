import './App.css';
import {useState} from "react";
import {Route, Routes, Link} from "react-router-dom";
import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";
import NewColorForm from "./NewColorForm";

function App() {

  const [colors, setColors] = useState([
    {name: "Orange", value: "orange"},
    {name: "Pink", value: "pink"},
    {name: "Teal", value: "teal"}
  ]);

  const addColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  function Home() {
    return (
      <>
        <h1>Welcome to the Color Factory</h1>
        <Link to="/colors/new">Add a color</Link>
        <ColorList colors={colors}/>
      </>
    )
  }

  return (
    <div className="App">
      <Routes>
            <Route exact path="/colors" element={<Home/>}/>
            <Route exact path="/colors/:color"element={<ColorDetails colors={colors}/>}/>
            <Route exact path="/colors/new" element={<NewColorForm addColor={addColor}/>}/>
            <Route exact path="/colors"/>
        </Routes>
    </div>
  );
}

export default App;
