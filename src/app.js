import React from 'react'
import ReactDOM from 'react-dom'
import Parallax from 'react-springy-parallax'
import 'bulma'
import './style.scss'

class App extends React.Component {

  render(){
    return (
      <div>
        <Parallax ref={ref => this.parallax = ref} pages={6}>
          <Parallax.Layer offset={0} speed={0.2} factor={7} style={{ backgroundImage: 'url(http://pluspng.com/img-png/stars-png-hd-star-transparent-png-2287.png)', backgroundSize: '40%', backgroundRepeat: 'repeat' }} />
          <Parallax.Layer offset={0} speed={0} factor={6} style={{ backgroundImage: 'url(http://www.pngall.com/wp-content/uploads/2016/03/Stars-PNG-Image.png)', backgroundSize: '40%', backgroundRepeat: 'repeat' }} />
          <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: 'rgba(255,0,0, 0.3)' }} />
          <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: 'rgba(0,255,0, 0.3)' }} />
          <Parallax.Layer offset={3} speed={1} style={{ backgroundColor: 'rgba(0,0,255, 0.3)' }} />
          <Parallax.Layer offset={4} speed={1} style={{ backgroundColor: 'rgba(255,0,0, 0.3)' }} />
          <Parallax.Layer offset={5} speed={1} style={{ backgroundColor: 'rgba(0,233,0, 0.3)' }} />

          <Parallax.Layer
            offset={0}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1 className="headerText title is-1">Lana Kirilenko</h1>
          </Parallax.Layer>

          <Parallax.Layer
            offset={1}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(2)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="section container">
              <div className="columns has-background">
                <div className="column">
                  <img src='https://i.imgur.com/FYM9UXP.gif' style={{ width: '100%' }} />
                </div>
                <div className="column">
                  <h2 className="has-text-light title is-2" >Project 1</h2>
                  <p className="has-text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
                  <br />
                  <p className="has-text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
                  <br />
                  <h2 className="has-text-light title is-6" >Link</h2>
                  <h2 className="has-text-light title is-6" >Link</h2>
                </div>
              </div>
            </div>
          </Parallax.Layer>

          <Parallax.Layer
            offset={2}
            speed={-0}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => this.parallax.scrollTo(3)}>
            <div className="article">
              <img src='https://i.imgur.com/2csZnU9.png' style={{ width: '40%' }} />
              <p>RoROelpOaNrc GmE9AZubeDf rCEia4 83 oW4MI4Vy Fd5VNHIgQ llOIn8 oWclc B25KdRaiPBpZ YDgJHgh RoROelpOaNrc GmE9AZubeDf rCEia4 83 oW4MI4Vy Fd5VNHIgQ llOIn8 oWclc B25KdRaiPBpZ YDgJHgh RoROelpOaNrc GmE9AZubeDf rCEia4 83 oW4MI4Vy Fd5VNHIgQ llOIn8 oWclc B25KdRaiPBpZ YDgJHgh </p>
            </div>
          </Parallax.Layer>

          <Parallax.Layer
            offset={3}
            speed={-0}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => this.parallax.scrollTo(4)}>
            <div className="article">
              <img src='https://i.imgur.com/2csZnU9.png' style={{ width: '40%' }} />
              <p>RoROelpOaNrc GmE9AZubeDf rCEia4 83 oW4MI4Vy Fd5VNHIgQ llOIn8 oWclc B25KdRaiPBpZ YDgJHgh RoROelpOaNrc GmE9AZubeDf rCEia4 83 oW4MI4Vy Fd5VNHIgQ llOIn8 oWclc B25KdRaiPBpZ YDgJHgh RoROelpOaNrc GmE9AZubeDf rCEia4 83 oW4MI4Vy Fd5VNHIgQ llOIn8 oWclc B25KdRaiPBpZ YDgJHgh </p>
            </div>
          </Parallax.Layer>

          <Parallax.Layer
            offset={4}
            speed={-0}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => this.parallax.scrollTo(5)}>
            <div className="article">
              <img src='https://i.imgur.com/2csZnU9.png' style={{ width: '40%' }} />
              <p>RoROelpOaNrc GmE9AZubeDf rCEia4 83 oW4MI4Vy Fd5VNHIgQ llOIn8 oWclc B25KdRaiPBpZ YDgJHgh RoROelpOaNrc GmE9AZubeDf rCEia4 83 oW4MI4Vy Fd5VNHIgQ llOIn8 oWclc B25KdRaiPBpZ YDgJHgh RoROelpOaNrc GmE9AZubeDf rCEia4 83 oW4MI4Vy Fd5VNHIgQ llOIn8 oWclc B25KdRaiPBpZ YDgJHgh </p>
            </div>
          </Parallax.Layer>

          <Parallax.Layer
            offset={5}
            speed={-0}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => this.parallax.scrollTo(0)}>
            <div className="article">
              <img src='https://i.imgur.com/2csZnU9.png' style={{ width: '40%' }} />
            </div>
          </Parallax.Layer>

        </Parallax>

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
