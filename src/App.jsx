import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App" data-testid="AppElement">
      <Header />
      <Home />
    </div>
  );
}

export default App;
