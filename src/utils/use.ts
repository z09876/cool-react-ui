import { useState, useCallback, useEffect } from 'react';

interface sizeType {
    width: number;
    height: number;
}

export  function useWinSize(): sizeType {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    });

    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        });
    }, []);

    useEffect(() => {
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    });
    return size;
}