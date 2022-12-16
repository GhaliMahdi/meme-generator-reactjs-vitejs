import React from "react"
import "../styles/Meme.css"
import memesData from "../MemesData"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("");
    function getMeme(){
        const url = memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url  
        setMemeImage(url)
    }

    return (
        <main>
            <div className='form'>
                <input 
                    className='form--input' 
                    type="text" 
                    placeholder="Top Text">
                </input>
                <input 
                    className='form--input' 
                    type="text" 
                    placeholder="Bottom Text">
                </input>
                <button 
                    className='form--button' 
                    onClick={getMeme}>
                Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} alt="" className="meme--image" />
        </main>
    )
}