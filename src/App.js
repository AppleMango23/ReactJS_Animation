import "./App.css";
import { useState } from "react";
import { animated, useTransition } from "react-spring";

const App = () => {
  const [items, setItems] = useState([]);
  const transition = useTransition(items, {
    from: { x: -100, y: 800, opacity: 0, width: 10, height: 10 },
    enter: (item) => async (next) => {
      await next({ y: item.y, opacity: 1, delay: item.delay }); //making one by one coming in
      await next({ x: 0, width: 100, height: 100 });
    },
    leave: { x: 100, y: 900, opacity: 0 },
  });

  return (
    <div className="app">
      <button
        onClick={() => {
          setItems((v) =>
            v.length
              ? []
              : [
                  { y: -100, delay: 200 },
                  { y: -50, delay: 400 },
                  { y: 0, delay: 600 },
                ]
          ); //If it is true make it false else make it true
        }}
      >
        {items.length ? "HIDE~" : "POP!"}
      </button>

      <div className="container">
        {transition((style, item) =>
          item ? (
            <animated.div style={style} className="item">
              {/* <p>I am Noah! React!</p> */}
            </animated.div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default App;
