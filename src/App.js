import Intro from "./components/Intro/Intro";
import Navbar from "./components/NavBar/navbar";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <Skills />
      <Works />
    </div>
  );
}

export default App;
