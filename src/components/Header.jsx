import TrollFace from "../assets/troll-face.png"
import "../styles/Header.css"

export default function Header() {
    return (
        <header className="header">
          <img src={TrollFace} alt='' className="header--image"/>
          <h2 className="header--title">Meme Generator</h2>
          <p className="header--project">Learning React - State</p>
      </header>
    )
}