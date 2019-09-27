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
        windowHeight: window.innerHeight,
        progressPosition: '0vw'
      }

      this.handleScroll = this.handleScroll.bind(this)
      this.goToTop = this.goToTop.bind(this)
      this.updateHeight = this.updateHeight.bind(this)
      this.getProgressPosition = this.getProgressPosition.bind(this)
      this.flat_hex_to_pixel = this.flat_hex_to_pixel.bind(this)
      this.getCoordinatesWithIcons = this.getCoordinatesWithIcons.bind(this)
      this.setTiles = this.setTiles.bind(this)
  }

  handleScroll() {
      this.setState({ scroll: window.scrollY })
      this.getProgressPosition()
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

  getProgressPosition(){
    if(this.state.scroll < this.state.homeHeight/3*2) {
      this.setState({ progressPosition: "0vw" })
    } else if(this.state.scroll > this.state.homeHeight/3*2 && this.state.scroll < this.state.homeHeight+this.state.aboutHeight/3*2) {
      this.setState({ progressPosition: "25vw" })
    } else if(this.state.homeHeight+this.state.aboutHeight/3*2 && this.state.scroll < this.state.homeHeight+this.state.aboutHeight+this.state.portfolioHeight/3*2){
      this.setState({ progressPosition: "50vw" })
    } else {
      this.setState({ progressPosition: "75vw" })
    }
  }

  flat_hex_to_pixel(q, r) {
    var y = 52 * (3./2 * q)
    var x = 52 * (Math.sqrt(3)/2 * q + Math.sqrt(3) * r)
    return [x, y]
  }

  getCoordinatesWithIcons(icons, coord){
    const result =[]
    let delay = 0
    for(let i=0; i<icons.length; i++){
      let twoCoord = this.flat_hex_to_pixel(coord[i][0], coord[i][1])
      twoCoord.push(icons[i])
      twoCoord.push(delay)
      delay+=50
      result.push(twoCoord)

    }
    console.log(result)
    return result
  }

  setTiles() {
    const listOfIcons = ["devicon-javascript-plain  icond", "devicon-react-original  icond", "devicon-nodejs-plain  icond", "devicon-python-plain  icond", "devicon-django-plain  icond", "devicon-html5-plain  icond", "devicon-css3-plain  icond", "devicon-express-original  icond", "devicon-postgresql-plain  icond", "devicon-mongodb-plain  icond", "devicon-babel-plain  icond", "devicon-sass-original  icond", "devicon-git-plain  icond", "devicon-github-plain  icond", "devicon-photoshop-plain  icond", "devicon-illustrator-plain  icond", "devicon-webpack-plain  icond", "devicon-mocha-plain icond", "devicon-gimp-plain icond"]

    const listOfPCoordinates= [[0,0],[0,1],[0,2],[1,-1],[1,0],[1,1],[1,2],[2,-2],[2,-1],[2,0],[2,1],[2,2],[3,-2],[3,-1],[3,0],[3,1],[4,-2],[4,-1],[4,0]]

    const targetList = this.getCoordinatesWithIcons(listOfIcons, listOfPCoordinates)

    return (
      <div  className="section" style={{position: "relative"}}>
        {targetList.map(item =>
          <ScrollAnimation
            key={item[2]}
            style={{top:item[0], left:item[1], position: "absolute"}}
            animateIn="flipInX"
            animateOnce={true}
            delay={+(item[3])}>
          <div className="iconContainer">
          <i className={item[2]}></i>
          </div>
          </ScrollAnimation>
        )}
      </div>
    )
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
            <div className="progressNav" style={{left: this.state.progressPosition}}></div>
            <ul>
              <a onClick={this.goToTop}
                className="has-text-weight-bold is-one-quater navitem" >Home</a>
              <AnchorLink href="#about"
                className="has-text-weight-bold is-one-quater navitem">About</AnchorLink>
              <AnchorLink href="#portfolio"
                className="has-text-weight-bold is-one-quater navitem">Portfolio</AnchorLink>
              <AnchorLink href="#contact"
                className="has-text-weight-bold is-one-quater navitem">Contact</AnchorLink>
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
            {this.setTiles()}
          </div>

          <div
            className="portfolio"
            style={{height: window.innerHeight}}
            id="portfolio"
            ref="portfolio">

          </div>

          <div
            className="contact"
            style={{height: window.innerHeight}}
            id="contact"
            ref="contact">
            <form name="contact" method="post" action="/">
              <input type="hidden" name="form-name" value="contact" />
              <div className="inputField">
                <input className=" has-text-weight-bold input is-medium" type="text" name="name" placeholder="Name"/>
              </div>
              <div className="inputField">
                <input className=" has-text-weight-bold input is-medium" type="email" name="email" placeholder="Email"/>
              </div>
              <div className="inputField">
                <textarea className=" has-text-weight-bold textarea is-medium" name="message" placeholder="Your message"></textarea>
              </div>
              <div className="">
                <button className="button is-info" type="submit">Send</button>
              </div>
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
