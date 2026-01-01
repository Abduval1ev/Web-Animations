import { cocktailLists, mockTailLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cocktails = () => {
  useGSAP(() => {
    const paralaxTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: 0.3,
      },
    });

    paralaxTimeLine
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  }, []);

  return (
    <section id="cocktails" className="noisy">
      <img alt="l-leaf" id="c-left-leaf" src="/images/cocktail-left-leaf.png" />
      <img
        alt="r-leaf"
        id="c-right-leaf"
        src="/images/cocktail-right-leaf.png"
      />
      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>
          <ul>
            {cocktailLists.map(({ name, country, price, index }) => (
              <li key={index}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {country}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Popular */}
        <div className="loved">
          <h2>Most loved cocktails:</h2>
          <ul>
            {mockTailLists.map(({ name, country, price, index }) => (
              <li key={index}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {country}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
