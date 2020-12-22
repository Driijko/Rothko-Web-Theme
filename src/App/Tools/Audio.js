import {createRef, useEffect} from "react";

export default function Audio({sfx, playSfx, loop}) {
    const audioElementRef = createRef();

    const audioElement = (
        <audio 
            style={{position: "absolute"}}
            type="audio/mp3"
            src={sfx[playSfx]}
            ref={audioElementRef}
            loop={loop === undefined ? false : true}
        ></audio>
    );

    useEffect(()=> {
        if (playSfx !== null) {
            audioElementRef.current.currentTime = 0;
            audioElementRef.current.play();            
        };
    },[playSfx]);

    return audioElement;
};