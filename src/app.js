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
    var x = 45 * (3./2 * q)
    var y = 45 * (Math.sqrt(3)/2 * q + Math.sqrt(3) * r)
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
    return result
  }

  setTiles() {
    const listOfIcons = ["devicon-javascript-plain  icond", "devicon-react-original  icond", "devicon-nodejs-plain  icond", "devicon-python-plain  icond", "devicon-django-plain  icond", "devicon-html5-plain  icond", "devicon-css3-plain  icond", "devicon-express-original  icond", "devicon-postgresql-plain  icond", "devicon-mongodb-plain  icond", "devicon-babel-plain  icond", "devicon-sass-original  icond", "devicon-git-plain  icond", "devicon-github-plain  icond", "devicon-photoshop-plain  icond", "devicon-illustrator-plain  icond", "devicon-webpack-plain  icond", "devicon-mocha-plain icond", "devicon-gimp-plain icond"]

    const listOfPCoordinates= [[0,0],[0,1],[0,2],[1,-1],[1,0],[1,1],[1,2],[2,-2],[2,-1],[2,0],[2,1],[2,2],[3,-2],[3,-1],[3,0],[3,1],[4,-2],[4,-1],[4,0]]

    const targetList = this.getCoordinatesWithIcons(listOfIcons, listOfPCoordinates)

    return (
      <div  className="section tech-icons" style={{position: "relative"}}>
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
            className="about section"
            id="about"
            ref="about">
              <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <h1 className="projects-header">About</h1>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={200}>
                <p className="statement project-title title is-4">Hi, my name is Lana, I am a junior full-stack developer and I'm in love with coding.</p>
              </ScrollAnimation>
            <div className="">
              <div className=" avatar-and-stat ">
                <ScrollAnimation animateIn="fadeInDown" animateOnce={true} delay={500} className=" has-text-centered">
                  <img className="avatar" src="https://i.imgur.com/sZxieeA.png"  />
                </ScrollAnimation>
                <div className="about-text">
                  <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={200}>
                    <p className="project-text is-family-secondary">&nbsp;&nbsp;&nbsp;I started to learn JavaScript just a few months ago and now I am very proud of my progress and how much I've learned and put into practice. I find coding very exciting and want to work with people who share the same enthusiasm for this discipline! I really enjoy solving problems as it gives me great satisfaction when I manage to come up with a solution to a complicated issue.</p>

                    <p className="project-text is-family-secondary">&nbsp;&nbsp;&nbsp;And when I am not coding, I like to climb (bouldering), create things with Blender3D and print them with a 3D printer, make leather bags, use epoxy resin, play video and board games and learn how to create games with Unreal Engine 4</p>
                  </ScrollAnimation>
                </div>
              </div>
              <div className=" tech-icons-with-list has-text-centered">
                <p className="project-title title is-4">Languages and Technologies</p>
                {this.setTiles()}
                <p className="project-text is-family-secondary">Javascript | React | Python | Django | Express.js | Node.js</p>
                <p className="project-text is-family-secondary">Webpack | Babel | Mocha | MongoDB | SQLite | PostgreSQL | HTML5 | CSS3 | SASS | Bulma | Git | Github</p>
                <p className="project-text is-family-secondary">Phitoshop | Illustrator | Gimp </p>
              </div>
            </div>


          </div>

          <div
            className="portfolio section"
            id="portfolio"
            ref="portfolio">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <h1   className="projects-header">Projects</h1>
            </ScrollAnimation>
            <div className="projects">

              <div className="columns  section">
                <div  className="column desktop-image">
                  <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={300} duration={2}>
                    <img src="https://i.imgur.com/8BBYutr.png" />
                  </ScrollAnimation>
                </div>
                <div className="column section project-description">
                  <div  className="mobile-image">
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={300} duration={2}>
                      <img src="https://i.imgur.com/8BBYutr.png" />
                    </ScrollAnimation>
                  </div>
                  <div className="">
                    <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={300} duration={2}>
                      <h2 className="project-title title is-4"> Vanilla JavaScript Pac-Man</h2>
                    </ScrollAnimation>
                    <br />
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400} duration={2}>
                      <p className="project-text is-family-secondary"><span className="has-text-weight-bold">Languages and Technologies used:</span> JavaScript | HTML5 | CSS3 | Git | Github | Google Fonts  </p>
                      <br />
                      <p className="project-text is-family-secondary">Pac-Man is a maze arcade game, the player controls the character, as he must eat all the dots inside an enclosed maze while avoiding four colored ghosts. Eating large flashing "Power Pellets" will cause the ghosts to reverse direction, allowing Pac-Man to eat them for bonus points.</p>
                      <br />
                      <p className="project-text is-family-secondary"><span className="has-text-weight-bold">Type of project:</span> 7-days solo project.  </p>
                    </ScrollAnimation>
                  </div>
                  <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={600} duration={2}>
                    <div className="links ">
                      <div className="container has-text-centered">
                        <a href="https://ducankir.github.io/pacman/" className="title is-3 fas fa-link link"></a>
                      </div>
                      <div className="container has-text-centered">
                        <a href="https://github.com/DucanKir/pacman"className="title is-3 fab fa-github link"></a>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>

              <div  className="columns section">
                <div className="column section project-description">
                  <div className="">
                    <div  className=" mobile-image">
                      <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={2}>
                        <img src="https://i.imgur.com/n1nhPKP.png" />
                      </ScrollAnimation>
                    </div>
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={2}>
                      <h2 className="project-title title is-4"> "Bored" Games</h2>
                    </ScrollAnimation>
                    <br/>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={300} duration={2}>
                      <p className="project-text is-family-secondary"><span className="has-text-weight-bold">Languages and Technologies used:</span> JavaScript | React | Webpack | HTML5 | CSS3 | SASS | Bulma | API |Babel | Git | Github | Google Fonts  </p>
                      <br />
                      <p className="project-text is-family-secondary">This platform allows users to search for a board games, sort by categories, mechanics, price, number of players and more! </p>
                      <br />
                      <p className="project-text is-family-secondary"><span className="has-text-weight-bold">Type of project:</span> 2-days hackathon pair coding.  </p>
                      <br />
                      <p className="project-text is-family-secondary"><span className="has-text-weight-bold">Team:</span> Lana Kirilenko and <a className="team-link" href="https://www.linkedin.com/in/freddie-hoy/"> Frddie Hoy</a></p>
                    </ScrollAnimation>
                  </div>
                  <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={300} duration={2}>
                    <div className="links ">
                      <div className="container has-text-centered">
                        <a href="https://ducankir.github.io/project-2/#/"className="title is-3 fas fa-link link"></a>
                      </div>
                      <div className="container has-text-centered">
                        <a href="https://github.com/DucanKir/project-2"className="title is-3 fab fa-github link"></a>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div  className="column desktop-image">
                  <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={2}>
                    <img src="https://i.imgur.com/n1nhPKP.png" />
                  </ScrollAnimation>
                </div>
              </div>

              <div  className="columns section">
                <div  className="column desktop-image">
                  <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={2}>
                    <img src="https://i.imgur.com/Bnt57ov.png" />
                  </ScrollAnimation>
                </div>
                <div className="column section project-description">
                  <div className="">
                    <div  className="mobile-image">
                      <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={2}>
                        <img src="https://i.imgur.com/Bnt57ov.png" />
                      </ScrollAnimation>
                    </div>
                    <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={2}>
                      <h2 className="project-title title is-4"> Happening</h2>
                    </ScrollAnimation>
                    <br/>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={300} duration={2}>
                      <p className="project-text is-family-secondary"><span className="has-text-weight-bold">Languages and Technologies used:</span> JavaScript | React | Node.js | Express | JWT | MongoDB | Webpack | HTML5 | CSS3 | SASS | API | Babel | Git | Github | Google Fonts  </p>
                      <br />
                      <p className="project-text is-family-secondary">Happening is a full-stack web application which allows users to find and attend events and people to attend them with.</p>
                      <br />
                      <p className="project-text is-family-secondary"><span className="has-text-weight-bold">Type of project:</span> 7-days group project.  </p>
                      <br />
                      <p className="project-text is-family-secondary"><span className="has-text-weight-bold">Team:</span> Lana Kirilenko,<a className="team-link" href="https://github.com/Fearchar"> Fearchar MacLean</a>, <a className="team-link" href="https://github.com/acadonis"> Alexsis Adonis</a> and <a className="team-link" href="https://github.com/mtcolvard"> Matthew Colvard</a> </p>
                      <br />
                      <p className="project-text is-family-secondary"><span className="has-text-weight-bold">My role:</span> Created back end and front end for users (registration, login, profile), their interaction (following users) and adding events to user profile. Homepage. </p>
                    </ScrollAnimation>
                  </div>
                  <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={300} duration={2}>
                    <div className="links ">
                      <div className="container has-text-centered">
                        <a href="https://happening-sei42.herokuapp.com/#/"className="title is-3 fas fa-link link"></a>
                      </div>
                      <div className="container has-text-centered">
                        <a href="https://github.com/DucanKir/project-3-events-site"className="title is-3 fab fa-github link"></a>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>

              <div  className="columns section">
                <div className="column section project-description">
                  <div className="">
                    <div  className="column mobile-image">
                      <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={2}>
                        <img src="https://i.imgur.com/dGPevOL.png" />
                      </ScrollAnimation>
                    </div>
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={2}>
                      <h2 className="project-title title is-4"> Video Games</h2>
                    </ScrollAnimation>
                    <br/>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={300} duration={2}>
                      <p className="project-text is-family-secondary"><span className="has-text-weight-bold">Languages and Technologies used:</span> JavaScript | Python | React | Django | SQLite | Webpack | HTML5 | CSS3 | SASS | Bulma | API | Babel | Git | Github | Google Fonts  </p>
                      <br />
                      <p className="project-text is-family-secondary"> This is a full-stack website for searching for video games, related games, sorting by gaming platform and genre. Each game has description, screenshots, video, links to stores and website.</p>
                      <br />
                      <p className="project-text is-family-secondary"><span className="has-text-weight-bold">Type of project:</span> 7-days solo project.  </p>
                    </ScrollAnimation>
                  </div>
                  <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={300} duration={2}>
                    <div className="links ">
                      <div className="container has-text-centered">
                        <a href="https://project-4-videogames.herokuapp.com/#/"className="title is-3 fas fa-link link"></a>
                      </div>
                      <div className="container has-text-centered">
                        <a href="https://github.com/DucanKir/project-4-videogames"className="title is-3 fab fa-github link"></a>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div  className="column desktop-image">
                  <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={2}>
                    <img src="https://i.imgur.com/dGPevOL.png" />
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>

          <div
            className="contact"
            style={{height: window.innerHeight}}
            id="contact"
            ref="contact">
            <div className="contact-form section">
              <div className="contact-text">
                <ScrollAnimation animateIn="fadeInDown" duration={2} animateOnce={true}>
                  <h1 className="contact-header has-text-light">Contact</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp"  animateOnce={true}>
                  <p className="contact-paragraph has-text-light has-text-centered">If you have any questions, please contact me!</p>
                </ScrollAnimation>
              </div>
              <br />
              <form name="contact" method="post" action="/">
                <input type="hidden" name="form-name" value="contact" />
                <div className="inputField">
                  <ScrollAnimation animateIn="fadeInRight" duration={2} animateOnce={true} delay={200}>
                    <input className=" has-text-weight-bold input is-medium" type="text" name="name" placeholder="Name"/>
                  </ScrollAnimation>
                </div>
                <div className="inputField">
                  <ScrollAnimation animateIn="fadeInRight" duration={2} animateOnce={true} delay={300}>
                    <input className=" has-text-weight-bold input is-medium" type="email" name="email" placeholder="Email"/>
                  </ScrollAnimation>
                </div>
                <div className="inputField">
                  <ScrollAnimation animateIn="fadeInRight" duration={2} animateOnce={true} delay={400}>
                    <textarea className=" has-text-weight-bold textarea is-medium" name="message" placeholder="Your message"></textarea>
                  </ScrollAnimation>
                </div>
                <div className="">
                  <ScrollAnimation animateIn="fadeInRight" duration={2} animateOnce={true} delay={500}>
                    <button className="button is-info send-button is-outlined" type="submit">Send</button>
                  </ScrollAnimation>
                </div>
              </form>
            </div>
              <div className="has-text-centered arrow-up">
                <AnchorLink href="#home" className="fas fa-chevron-up"></AnchorLink>
              </div>
            <div className="contact-icons">
              <div className="contact-icons-container">
                <a href="https://github.com/DucanKir" className="fab fa-github"></a>
                <a href="https://www.linkedin.com/in/lana-kir/" className="fab fa-linkedin-in"></a>
                <a href="https://www.facebook.com/ducan.kirilenko" className="fab fa-facebook-f"></a>
                <a href="https://www.instagram.com/ducankir/" className="fab fa-instagram"></a>
              </div>
            </div>
          </div>

        </div>
      )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
