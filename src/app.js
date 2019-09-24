import React from 'react'
import ReactDOM from 'react-dom'
import Parallax from 'react-springy-parallax'
import ReactPageScroller from "react-page-scroller"
import "animate.css/animate.min.css"
import ScrollAnimation from 'react-animate-on-scroll'
import {Animated} from "react-animated-css"

import './style.scss'


class App extends React.Component {

    render(){
      return (
        <div className="section">
          <div className="full-screen home">
            <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
              <h1 className="title is-2 has-text-light">
                  Lana Kirilenko
              </h1>
            </Animated>
            <br />
            <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay={1000} isVisible={true}>
              <div className="columns">
                <div className="column">
                </div>
                <div className="column has-text-light">
                    hello world ;)hello world ;)hello world ;)hello world ;)hello world ;)hello world ;)hello world ;)hello world ;)hello world ;)hello world ;)hello world ;)hello world ;)hello world ;)hello world ;)hello world ;)hello world ;)hello world ;)hello world ;)hello world ;)hello world ;)hello world ;)hello world ;)
                </div>
                <div className="column">
                </div>
              </div>
            </Animated>
          </div>
          <div className="full-screen">
            <ScrollAnimation animateIn="flipInY" animateOnce={true}>
              <h1 className="title is-2">LANA KIR</h1>
            </ScrollAnimation>
          </div>
          <div className="full-screen">
            <h1 className="title is-2">LANA KIR</h1>
          </div>
        </div>
      )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
