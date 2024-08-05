import "./App.css";
import RandomColor from "./components/random-color";
import Accordian from "./components/accordian/index";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
function App() {
  return (
    <div className="App">
      <Accordian/>
      <RandomColor/>
      <StarRating noOfStar={10}/>
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={'5'}/>
    </div>
  );
}

export default App;
