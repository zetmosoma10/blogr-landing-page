import Feature from "./Sections/Feature";
import Footer from "./Sections/Footer";
import Showcase from "./Sections/Showcase";
import Infrastructure from "./Sections/Infrastructure";
import Hero from "./Sections/Hero";

function App() {
  return (
    <main>
      <Hero />
      <div className="mt-20 lg:mt-36 mb-80 lg:mb-0">
        <Feature />
      </div>
      <Infrastructure />
      <div className="mt-20 lg:mt-36">
        <Showcase />
      </div>
      <Footer />
    </main>
  );
}

export default App;
