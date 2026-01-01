import gsap from "gsap/gsap-core.js";
import { ScrollTrigger, SplitText } from "gsap/all";
import { About, Art, Cocktails, Hero, NavBar, Menu } from "./components";

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
        <Menu />
      </main>
    </>
  );
}

export default App;
