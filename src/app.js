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
        <div className="">

          <video  className="backgroundVideo" autoPlay muted loop>
            <source src="https://svetlana-portfolio.s3-eu-west-1.amazonaws.com/bg_video.mp4" type="video/mp4" />
          </video>

          <div className="full-screen home section">
            <div className="">
              <Animated animationIn="fadeInUp" animationInDuration={3000} animationOut="fadeOut" isVisible={true}>
                <h1 className="title is-size-1 has-text-light header-text">Hello </h1>
              </Animated>

              <Animated animationIn="fadeInUp" animationInDuration={3000} animationInDelay={1000} animationOut="fadeOut" isVisible={true}>
              <h1 className="title is-size-1 has-text-dark header-text">
                <span className="title is-size-1 has-text-light header-text has-text-weight-bold">I'm&nbsp;</span>
                Lana Kirilenko
              </h1>
              </Animated>

              <Animated animationIn="fadeInRight" animationOut="fadeOut" animationInDelay={2000} animationInDuration={3000} isVisible={true}>
                <div className="has-text-light subtitle is-3">
                Full-stack web developer
                </div>
              </Animated>
              <br />
              <div>
                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={3000} animationInDuration={3000} isVisible={true}>
                  <i className="fas fa-chevron-double-down" />
                </Animated>
              </div>
            </div>
          </div>

          <div className="nav">
            <a>Home</a>
            <a>About</a>
            <a>Portfolio</a>
            <a>Contact</a>
          </div>


          <div className="full-screen about">
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
