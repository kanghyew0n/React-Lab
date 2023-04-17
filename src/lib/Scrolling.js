import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Scrolling = () => {
  const [itemNumber, setItemNumber] = useState(2);
  const [itemWidth, setItemWidth] = useState(0);

  //   useEffect(() => {
  //     setItemWidth(document.querySelector(".item2").clientWidth);
  //     const _containerWidth =
  //       document.querySelector(".scrollContainer").clientWidth;
  //     if (_containerWidth % itemWidth === 0) {
  //       setItemNumber(Math.floor(_containerWidth / itemWidth));
  //     } else {
  //       setItemNumber(Math.floor(_containerWidth / itemWidth) + 1);
  //     }
  //   }, [itemWidth]);

  useEffect(() => {
    if (!document.querySelector(".item2")?.clientWidth) return;
    const _containerWidth =
      document.querySelector(".scrollContainer").clientWidth;
    const _itemWidth = document.querySelector(".item2")?.clientWidth;

    if (_containerWidth % itemWidth === 0) {
      setItemNumber(Math.floor(_containerWidth / _itemWidth));
    } else {
      console.log(_containerWidth / _itemWidth);
      setItemNumber(Math.floor(_containerWidth / _itemWidth));
    }

    setItemWidth(_itemWidth);
  }, [itemWidth]);

  return (
    <Container>
      <div className="scrollContainer primary">
        <div className="item2">Scrolling!!!</div>
        {Array.from({ length: itemNumber }).map((_, idx) => (
          <div key={idx} className="item2">
            Scrolling!!!
          </div>
        ))}
      </div>
      <div className="scrollContainer secondary">
        {Array.from({ length: itemNumber }).map((_, idx) => (
          <div key={`${idx}_sec`} className="item2">
            Scrolling!!!
          </div>
        ))}
      </div>
    </Container>
  );
};

const primary = keyframes`
	from {
    left: 0%;
  }
  to {
    left: -100%;
  }
`;

const secondary = keyframes`
  from {
    left: 100%;
  }
  to {
    left: 0%;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  background-color: blue;
  &:hover div {
    animation-play-state: paused;
  }

  .item2 {
    font-size: 30px;
    font-weight: 700;
    padding-right: 30px;
  }

  .scrollContainer {
    width: 100%;
    height: 80px;

    position: absolute;
    left: 0%;
    top: 0%;
    display: flex;
    align-items: center;

    &.primary {
      animation: ${primary} 5s linear infinite;
    }

    &.secondary {
      animation: ${secondary} 5s linear infinite;
    }
  }
`;

export default Scrolling;
