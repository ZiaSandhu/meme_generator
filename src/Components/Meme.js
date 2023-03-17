import React, { useEffect, useState } from 'react'
// import MemeData from './MemeData'

export default function Meme() {
    const [allMeme,setAllMeme]=useState([])
    const [meme,setMeme]=useState(
        {
            topText:"",
            bottomText:"",
            url:"./Images/memeImg.png"
        })
    function LoadImg(){
    const memearray=allMeme
    const random=Math.floor(Math.random() * memearray.length)
    setMeme(prevMeme => ({
        ...prevMeme,
        url:memearray[random].url
    })
    )

    // console.log(meme)
    }
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res=>res.json())
            .then(data=>setAllMeme(data.data.memes))
    },[])

    function handlevent(event){
        const {name,value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }
    return (
    <div className='meme'>
            <div className='meme-form'>
            <input 
                className='meme-form-input' 
                type='text' 
                id='toptext'
                placeholder='top text' 
                name='topText'
                value={meme.topText}
                onChange={handlevent}
            />
            <input 
                className='meme-form-input' 
                type='text' 
                id='bottomText'
                placeholder='bottom text' 
                name='bottomText' 
                value={meme.bottomText}
                onChange={handlevent}
            />
            <button className='meme-form-button' onClick={LoadImg}  >Get a new meme image  🖼</button>
            {/* */}
            </div>
            <div className='container'>
                <img id="memeImg" src={meme.url} alt="" />
                <h4 className='topCentered'>{meme.topText}</h4>
                <h4 className='bottomCentered'>{meme.bottomText}</h4>
            </div>
    </div>
  )
}
