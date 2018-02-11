import React, { Component } from 'react';
import Resume from './Resume';
import Contact from './Contact';
import './App.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedComponent: Carousel,
    }
  }
  render() {
    const DisplayedComponent = this.state.displayedComponent;
    return(
      <div className="theContent">
        <div className={`theHeaderStyle ${this.state.displayedComponent === Carousel ? 'modifier-class' : ''}`}>
          <h1 className="theTitle" onClick={()=> this.setState({ displayedComponent : Carousel})}> No mad Life </h1>
            <div className="myMenu">
            <button onClick={()=> this.setState({ displayedComponent : Resume})}> Resume </button>
            <button onClick={()=> this.setState({ displayedComponent : About})}> About me and my work </button>
            <button onClick={()=> this.setState({ displayedComponent : Contact})}> Contact Me </button>
          </div>
        </div>
      <DisplayedComponent />
      </div>
    );
  }
}

function About(){
  return(
    <div className="Travel">
      <ul>
        <li>To Do List That Strangers Will fill</li>
        <li>Spread Love</li>
        <li>Do what I know the best and do it well</li>
        <li>Challenges are a way of life</li>
      </ul>
    </div>
  );
}


class Section extends Component {
  render() {
    return(
      <div>
      </div>
    );
  }
}

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: null,
      imageType: 'Map',
      isImageLoaded: false,
      imageNumber: 0
    };

  }
 get backgroundImages(){
   return [
            {
              type: "Map",
              image: "images/map.jpg"
            },
            {
              type: "End",
              image: "images/end.jpg"
            },
            {
              type: "Boat",
              image: "images/boat.jpg"
            },
            {
              type: "Gramatik",
              image: "images/gramatik.jpg"
            }
          ];
        }

  componentWillMount() {
    this.loadImage("../images/map.jpg")
    this.nextImage();
  }

  loadImage() {
    let backgroundImage = this.backgroundImages[0];
    this.setState({
      imageData: backgroundImage,
      isImageLoaded: true
    })
  }

  changeImage() {
    let imageNumber = this.state.imageNumber;
    let nextImageNumber;
    if (imageNumber === this.backgroundImages.length - 1) {
      nextImageNumber = 0;
    } else {
      nextImageNumber = imageNumber + 1;
    }
    let nextImg = this.backgroundImages[nextImageNumber];
    this.setState({
      imageData: nextImg,
      isImageLoaded: true,
      imageNumber: nextImageNumber
    });
  }

  nextImage() {
    setTimeout((() => {
      this.changeImage()
      this.nextImage()
    }),5000)
  }
  render() {
    return (
      <div className="App" style={{backgroundImage : 'url('+this.state.imageData.image+')'}}>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Section />
      </div>
    );
  }
}

export default App;
