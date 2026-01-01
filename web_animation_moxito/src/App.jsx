import gsap from "gsap/gsap-core.js";
import { ScrollTrigger, SplitText } from "gsap/all";
import { About, Art, Cocktails, Hero, NavBar } from "./components";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <main>
        <NavBar />
        <Hero />
        <Cocktails />
        <About />
        <Art />
      </main>
    </>
  );
}

export default App;
