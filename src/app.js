import React from 'react'
import ReactDOM from 'react-dom'
import "animate.css/animate.min.css"
import ScrollAnimation from 'react-animate-on-scroll'
import {Animated} from "react-animated-css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/react-fontawesome'

import './style.scss'


class App extends React.Component {

  constructor(props) {
      super(props)

      this.state = {
        hoveredElement: ""
      }

      this.handleScroll = this.handleScroll.bind(this)
      this.handleHover = this.handleHover.bind(this)
      this.doNothing = this.doNothing.bind(this)
  }

  handleHover(e){
    this.setState({ hoveredElement: e.target.id })
    console.log(event.clientX)
  }

  handleScroll() {
      this.setState({ scroll: window.scrollY })
  }

  componentDidMount() {
        const el = document.querySelector('nav')

        this.setState({ top: el.offsetTop, height: el.offsetHeight })
        window.addEventListener('scroll', this.handleScroll)

    }

  componentDidUpdate() {
        this.state.scroll > this.state.top ?
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0
    }

  doNothing() {
    const x = "1"
  }

  render(){
      return (
        <div className="">

          <video  className="backgroundVideo" autoPlay muted loop>
            <source src="https://svetlana-portfolio.s3-eu-west-1.amazonaws.com/bg_video.mp4" type="video/mp4" />
          </video>

          <div className="full-screen home section" id="home" onMouseEnter={this.state.hoveredElement === "home" ? this.doNothing : this.handleHover}>
            <div className="">
              <Animated animationIn="fadeIn" animationInDuration={3000} animationOut="fadeOut" isVisible={true}>
                <h1 className="title is-size-1 has-text-light header-text">Hello </h1>
              </Animated>

              <Animated animationIn="fadeInUp" animationInDuration={3000} animationInDelay={1000} animationOut="fadeOut" isVisible={true}>
              <h1 className="title is-size-1 has-text-dark header-text">
                <span className="title is-size-1 has-text-light header-text has-text-weight-bold">I'm </span>
                Lana Kirilenko
              </h1>
              </Animated>

              <Animated animationIn="fadeInRight" animationOut="fadeOut" animationInDelay={2000} animationInDuration={3000} isVisible={true}>
                <div className="has-text-light subtitle is-3">
                Full-stack web developer
                </div>
              </Animated>
            </div>
            <div>
              <Animated className="has-text-centered arrow" animationIn="fadeInUp" animationOut="fadeOut" animationInDelay={2500} animationInDuration={3000} isVisible={true}>
                <br />
                <AnchorLink href="#nav" className="fas fa-chevron-down"></AnchorLink>
              </Animated>
            </div>
          </div>

          <nav id="nav" className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
            <ul>
              <AnchorLink href="#home" className={this.state.hoveredElement === "home" ? "hoveredElement" : "navitem"} >Home</AnchorLink>
              <AnchorLink href="#about" className={this.state.hoveredElement === "about" ? "hoveredElement" : "navitem"}>About</AnchorLink>
              <AnchorLink href="#portfolio" className={this.state.hoveredElement === "portfolio" ? "hoveredElement" : "navitem"}>Portfolio</AnchorLink>
              <AnchorLink href="#contact" className={this.state.hoveredElement === "contact" ? "hoveredElement" : "navitem"}>Contact</AnchorLink>
            </ul>
          </nav>

          <div className="full-screen about" id="about" onMouseEnter={this.state.hoveredElement === "about" ? this.doNothing : this.handleHover}>
            <ScrollAnimation animateIn="flipInY" animateOnce={true}>
              <h1 className="title is-2">LANA KIR</h1>
            </ScrollAnimation>
          </div>
          <div className="full-screen about" id="portfolio" onMouseEnter={this.state.hoveredElement === "portfolio" ? this.doNothing : this.handleHover}>
            <h1 className="title is-2" >LANA KIR</h1>
          </div>
          <div className="full-screen about" id="contact" onMouseEnter={this.state.hoveredElement === "contact" ? this.doNothing : this.handleHover}>
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
