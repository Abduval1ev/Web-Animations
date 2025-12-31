import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap/gsap-core.js";
import NavBar from "./components/NavBar";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <main>
        <NavBar />
      </main>
    </>
  );
}

export default App;
