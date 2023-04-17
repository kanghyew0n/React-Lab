import { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Scrolling = () => {
    const [itemWidth, setItemWidth] = useState(0);
    const [itemNum, setItemNum] = useState(0);
    const [count, setCount] = useState(0);

    const containerRef = useRef(null);
    const itemRef = useRef(null);

    useEffect(() => {
        setItemWidth(itemRef.current.offsetWidth);
        const _itemWidth = itemRef.current.offsetWidth;
        const _containerWidth = containerRef.current.offsetWidth;

        setItemNum(Math.floor(_containerWidth / _itemWidth));
        setCount(_containerWidth % _itemWidth);

        console.log(_containerWidth % _itemWidth);
    }, [itemWidth]);

    return (
        <Container ref={containerRef}>
            <ScrollTrack>
                <span className="div primary">
                    <span className="scrollingContainer" ref={itemRef}>
                        <span>안녕하세요오오오오</span>
                    </span>
                    {Array.from({ length: itemNum-1 }).map((_, idx) => (
                        <span className="scrollingContainer" key={idx}>
                            <span>안녕하세요오오오오</span>
                        </span>
                    ))}
                </span>
                <span className="div secondary">
                    {Array.from({ length: itemNum }).map((_, idx) => (
                        <span className="scrollingContainer" key={idx}>
                            <span>안녕하세요오오오오</span>
                        </span>
                    ))}
                </span>
            </ScrollTrack>
        </Container>
    );
};

const scrolling = keyframes`
0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% + 98px)); 
  }
`;

const scrolling2 = keyframes`
0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(98px); 
  }
`;

const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: blue;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
`;

const ScrollTrack = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;

    margin: 0;
    padding: 0;

    .div {
        width: 100%;
        height: 80px;

        position: absolute;
        left: 0%;
        top: 0%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        &.primary {
            animation: ${scrolling} 5s linear infinite;
        }

        &.secondary {
            left: -98px;
            animation: ${scrolling2} 5s linear infinite;
        }
    }
`;

export default Scrolling;
