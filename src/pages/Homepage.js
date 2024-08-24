import TypeIt from 'typeit-react'
import { PopupWidget } from 'react-calendly'

const Homepage = () => {
  return (
    <div class="App">
      <div>
        <PopupWidget url="https://calendly.com/katyjane8" />
      </div>
      <div class="titlePage">
        <TypeIt as={"h2"}
          options={{
            speed: 250,
            cursorSpeed: 1000,
            lifeLike: true,
            waitUntilVisible: true
          }}
          getBeforeInit={instance => {
            instance
              .type('katy welli', { delay: 500 })
              .delete(2)
              .pause(300)
              .type('ycheck')
              .pause(300)
              .type('o?', { delay: 500 })
              .pause(300)
              .delete(8)
              .pause(300)
              .type('katy welyczko dot com', { delay: 300 })
              .go()

            return instance
          }}
        ></TypeIt>
      </div>
    </div>
  )
}

export { Homepage }
