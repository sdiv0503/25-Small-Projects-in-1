import "./App.css";
import RandomColor from "./components/random-color";
import Accordian from "./components/accordian/index";
import StarRating from "./components/star-rating";
function App() {
  return (
    <div className="App">
      <Accordian/>
      <RandomColor/>
      <StarRating/>
    </div>
  );
}

export default App;
