import '../App.css';
import React from 'react';

export default function Meme() {

    // const [memeImg, setMemeImg] = React.useState("https:\/\/i.imgflip.com\/9ehk.jpg")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: ""
    })

    const [randImage, setRandImage] = React.useState("https:\/\/i.imgflip.com\/9ehk.jpg")

    const [allMemes, setAllMemes] = React.useState([])

    const memeApiUrl = 'https://api.imgflip.com/get_memes'

    React.useEffect(() => {
        fetch(memeApiUrl)
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    function generateMeme(event){
        event.preventDefault()
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        let url = allMemes[randomNumber].url
        setRandImage(url)
    }

    return (
        <main className="meme--container">
            <form onSubmit={generateMeme} className="meme--form">
                <input
                    className="top--text"
                    type="text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input
                    className="bottom--text"
                    type="text"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button className="btn--fetch">Get a new meme image</button>
            </form>
            <div className="meme">
                <img src={randImage} className="meme--img"/>
                <h2 className="meme--text top">{meme.topText.toUpperCase()}</h2>
                <h2 className="meme--text bottom">{meme.bottomText.toUpperCase()}</h2>
            </div>
        </main>
    )
}