import "./App.css";
import {
  Navbar,
  Home,
  About,
  Projects,
  Skills,
  Contact,
  Sidebar,
} from "./Components";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
