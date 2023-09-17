import "./App.css";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <About />
    </div>
  );
}

export default App;
