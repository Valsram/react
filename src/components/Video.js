import { useState, useEffect } from 'react';

const Video = (props) => {
  // let rate = 0; //  state del componente!!! 
  const [rate, setRate] = useState(0);  // HOOK!!!
  const [logued, setLogued] = useState(false);

  const rateVideo = () => {
    // rate++  => mas prohibido que PornHub!!!
    setRate(rate + 1)
  }

    // componentDidUpdate
    useEffect(() => {
      console.log('ups!! El componente se ha actaulizado')
    }, [rate])

  return (
    <div className="video-container">
        <div className="video-image">
        <img src={props.thumbnail} alt="Same alt value" />
        </div>
        <div className="video-info">
        <button onClick={props.deleteVideo}>Delete this video</button>
        <h3>{props.title}</h3>
        <span>This video has {rate} stars</span> | <button onClick={rateVideo}>Rate this video</button>
        <p>Upload date: {props.dateAdded}</p>
        <h4>Channel's Title: {props.channel}</h4>
        <p>{props.description}</p>
        </div>
    </div>   
  )
}

export default Video;