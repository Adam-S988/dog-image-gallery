import "./index.css";
import BreedSelector from "./Components/BreedSelector";
import Header from "./Components/Header";

function App() {
  return (
    <div class="greyBox">
      <div class="border">
        <Header />
      </div>
      <BreedSelector />
    </div>
  );
}

export default App;
