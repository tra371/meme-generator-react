import '../App.css';
import trollface from '../images/troll-face.png';

export default function Header() {
    return (
        <header className="header">
            <div className="header--left">
                <img src={trollface} className="header--img"/>
                <h2 className="header--title">Meme Generator</h2>
            </div>
            <h4 className="header--text">React Course - Project 3</h4>
        </header>
    )
}