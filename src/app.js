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
        hoveredElement: "",
        homeHeight: 0,
        aboutHeight: 0,
        portfolioHeight: 0,
        aboutHeight: 0,
        scroll: 0,
        windowHeight: window.innerHeight
      }

      this.handleScroll = this.handleScroll.bind(this)
      this.goToTop = this.goToTop.bind(this)
      this.updateHeight = this.updateHeight.bind(this)
  }

  handleScroll() {
      this.setState({ scroll: window.scrollY })

  }

  componentDidMount() {

    this.updateHeight()
     window.addEventListener("resize", this.updateHeight)

    const el = document.querySelector('nav')
    this.setState({
      top: this.refs.home.clientHeight,
      height: el.offsetHeight,
      homeHeight: this.refs.home.clientHeight,
      aboutHeight: this.refs.about.clientHeight,
      portfolioHeight: this.refs.portfolio.clientHeight,
      aboutHeight: this.refs.about.clientHeight
     })
    window.addEventListener('scroll', this.handleScroll)

  }

  componentWillUnmount() {
   window.removeEventListener("resize", this.updateHeight)
 }

  componentDidUpdate() {
    this.updateHeight()
    this.state.scroll > this.state.top ?
        document.body.style.paddingTop = `${this.state.height}px` :
        document.body.style.paddingTop = 0
  }

  updateHeight() {
   if (this.state.top != this.refs.home.clientHeight)
     this.setState({ top: this.refs.home.clientHeight })
  }

  goToTop(){
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
    })
  }


  render(){
      const homeheight = this.state.homeHeight
      const aboutheight = this.state.aboutHeight
      const portfolioheight = this.state.portfolioHeight
      const contactheight = this.state.contactHeight
      const bodyheight = homeheight + aboutheight + portfolioheight + contactheight

      return (
        <div className="">

          <div className="videoContainer" style={{height: window.innerHeight}}>
            <video  className="backgroundVideo" autoPlay muted loop>
              <source src="https://svetlana-portfolio.s3-eu-west-1.amazonaws.com/bg_video.mp4" type="video/mp4" />
            </video>
          </div>

          <div
            className='home section'
            style={{height: window.innerHeight}}
            ref="home"
            id="home">
            <div className="">
              <Animated animationIn="fadeIn" animationInDuration={3000} animationOut="fadeOut" isVisible={true}>
                <h1 className="title  has-text-light header-text">Hello </h1>
              </Animated>

              <Animated animationIn="fadeInUp" animationInDuration={3000} animationInDelay={1000} animationOut="fadeOut" isVisible={true}>
              <h1 className="title has-text-dark header-text">
                <span className="title has-text-light header-text has-text-weight-bold h1">I'm </span>
                Lana Kirilenko
              </h1>
              </Animated>

              <Animated animationIn="fadeInRight" animationOut="fadeOut" animationInDelay={2000} animationInDuration={3000} isVisible={true}>
                <div className="has-text-light subtitle is-3 h3">
                Full-stack web developer
                </div>
              </Animated>
            </div>
            <div>
              <Animated className="has-text-centered arrow" animationIn="fadeInUp" animationOut="fadeOut" animationInDelay={2500} animationInDuration={3000} isVisible={true} style={{top: window.innerHeight*0.75}}>
                <AnchorLink href="#nav" className="fas fa-chevron-down"></AnchorLink>
              </Animated>
            </div>
          </div>

          <nav id="nav" className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
            <ul>
              <a onClick={this.goToTop}
                className={`${this.state.scroll < homeheight/3*2 ? "hoveredElement" : "navitem"} has-text-weight-bold`} >Home</a>
              <AnchorLink href="#about"
                className={`${this.state.scroll > homeheight/3*2 && this.state.scroll < homeheight+aboutheight/3*2 ? "hoveredElement" : "navitem"} has-text-weight-bold`}>About</AnchorLink>
              <AnchorLink href="#portfolio"
                className={`${this.state.scroll > homeheight+aboutheight/3*2 && this.state.scroll < homeheight+aboutheight+portfolioheight/3*2 ? "hoveredElement" : "navitem"} has-text-weight-bold`}>Portfolio</AnchorLink>
              <AnchorLink href="#contact"
                className={`${this.state.scroll > homeheight+aboutheight+portfolioheight/3*2 ? "hoveredElement" : "navitem"} has-text-weight-bold`}>Contact</AnchorLink>
            </ul>
          </nav>

          <div
            className="about"
            style={{height: window.innerHeight}}
            id="about"
            ref="about">
            <ScrollAnimation animateIn="flipInY" animateOnce={true}>
              <h1 className="title is-2">LANA KIR</h1>
            </ScrollAnimation>
          </div>
          <div
            className="portfolio"
            style={{height: window.innerHeight}}
            id="portfolio"
            ref="portfolio">
            <h1 className="title is-2" >LANA KIR</h1>
          </div>
          <div
            className="about"
            style={{height: window.innerHeight}}
            id="contact"
            ref="contact">
            <form name="contact" netlify>
              <p>
                <label>Name <input type="text" name="name" /></label>
              </p>
              <p>
                <label>Email <input type="email" name="email" /></label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
        </div>
      )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
