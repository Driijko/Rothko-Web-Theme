import {useEffect} from "react";

import {delay} from "../settings";

export default function WindowResize() {

    useEffect(() => {
        let timeoutId = null;

        const resizeListener = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(()=> window.location.reload(), delay);
        }

        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, [])
}