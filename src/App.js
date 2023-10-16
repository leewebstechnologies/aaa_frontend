import "./app.scss";
import { Navbar } from "./components";
import { Header, Footer, About, Skills, Testimonial, Work } from "./container";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
