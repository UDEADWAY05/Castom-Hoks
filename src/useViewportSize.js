import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';


export function useViewportSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    function handleSize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    useWindowEvent('resize', handleSize)

    return {
        height: windowSize.height,
        width: windowSize.width,
    }
}