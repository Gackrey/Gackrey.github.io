import "./App.css";
import {
  Navbar,
  Home,
  About,
  Projects,
  Blogs,
  Skills,
  Contact,
  Sidebar,
  Footer
} from "./Components";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Home />
      <About />
      <Projects />
      <Blogs />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
