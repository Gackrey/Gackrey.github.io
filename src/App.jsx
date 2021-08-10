import "./App.css";
import {
  Navbar,
  Home,
  About,
  Projects,
  Skills,
  Contact,
  Sidebar,
  Footer,
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
      <Footer />
    </div>
  );
}

export default App;
