import {createRef, useEffect} from "react";

export default function Audio({audio, playAudio, loop}) {
    const audioElementRef = createRef();

    const audioElement = (
        <audio 
            style={{position: "absolute"}}
            type="audio/mp3"
            src={audio[playAudio]}
            ref={audioElementRef}
            loop={loop === undefined ? false : true}
        ></audio>
    );

    useEffect(()=> {
        if (playAudio !== null) {
            audioElementRef.current.currentTime = 0;
            audioElementRef.current.play();            
        };
    },[playAudio]);

    return audioElement;
};