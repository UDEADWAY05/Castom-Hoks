import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

export function useWindowScroll() {
    const [scroll, setScroll] = useState({
        x: window.scrollX,
        y: window.screenY,
    });

    function handleScroll() {
        setScroll({
            x: window.scrollX,
            y: window.scrollY,
        });
    }

    useWindowEvent('scroll', handleScroll, { passive: true })
    useWindowEvent('resize', handleScroll);

    function scrollTo(position) {
        window.scrollTo(position.x ?? scroll.x, position.y ?? scroll.y);
    }

    return [
        scroll,
        scrollTo
    ]
}


