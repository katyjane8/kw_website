import './App.css';
import TypeIt from "typeit-react";
import { PopupWidget } from "react-calendly";


function App() {
  return (
    <div class="app">
      <div>
        <PopupWidget url="https://calendly.com/katyjane8" />
      </div>
      <div class="titlePage">
      <TypeIt
        options={{
          speed: 250,
          cursorSpeed: 1000,
          lifeLike: true,
          waitUntilVisible: true
        }}
        getBeforeInit={(instance) => {
          instance
            .type("katy welli", { delay: 600 })
            .delete(2)
            .pause(300)
            .type('ycheck')
            .pause(300)
            .type('o?', { delay: 500 })
            .pause(300)
            .delete(8)
            .pause(300)
            .type('katy welyczko')
            .break({ delay: 50 })
            .type(' dot com', { delay: 300 })
            .go();

          // Remember to return it!
          return instance;
        }}
      >
      </TypeIt>
    </div>
    </div>
  );
}

export default App;
