import { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Scrolling = () => {
  const [itemNum, setItemNum] = useState(0);
  const [scrollingText, setScrollingText] = useState('kanghyewon')
  const itemRef = useRef(null);

  useEffect(() => {
    if (!itemRef) return;
    let _itemWidth = itemRef.current.offsetWidth;
    let _containerWidth = window.innerWidth;
    setItemNum(Math.ceil(_containerWidth / _itemWidth));
  }, [scrollingText, itemRef, window.innerWidth]);

  return (
    <>
      <ScrollingText>
        <span>스크롤링 텍스트를 변경해보세요!</span>
        <input
          type="text"
          name="scrolling_txt"
          value={scrollingText}
          onChange={(e) => setScrollingText(e.target.value)}
          placeholder="스크롤링 텍스트"
        ></input>
      </ScrollingText>

      <ScrollingContainer>
        <div className="primary">
          <ScrollingItem ref={itemRef}>
            <span>{scrollingText}</span>
          </ScrollingItem>

          {Number(itemNum) > 1 &&
            Array.from({ length: Number(itemNum) - 1 }).map((_, idx) => (
              <ScrollingItem key={`first__item_${idx}`}>
                <span>{scrollingText}</span>
              </ScrollingItem>
            ))}
        </div>
        <div className="secondary">
          {Array.from(itemNum === 0 ? { length: 1 } : { length: itemNum }).map(
            (_, idx) => (
              <ScrollingItem key={`second__item_${idx}`}>
                <span>{scrollingText}</span>
              </ScrollingItem>
            )
          )}
        </div>
      </ScrollingContainer>
    </>
  );
};

const scrolling = keyframes`
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(-100%, 0);
  }
`;

const scrolling2 = keyframes`
  from {
    transform: translate(100%, 0);
  }

  to {
    transform: translate(0%, 0);
  }
`;

const ScrollingText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  > input {
    width: 200px;
    margin-bottom: 0;
    background-color: #111;
    color: #fff;
  }
`;

const ScrollingContainer = styled.div`
  width: 100%;
  height: 85px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  overflow: hidden;
  white-space: nowrap;
  background-color: #222;
  border-radius: 4px;

  .primary {
    width: auto !important;
    height: 100%;
    position: absolute;
    left: 0px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    animation: ${scrolling} 30s linear infinite;
  }

  .secondary {
    width: auto !important;
    height: 100%;
    position: absolute;
    left: 0px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    animation: ${scrolling2} 30s linear infinite;
  }
`;

const ScrollingItem = styled.div`
  display: inline-block;
  & > span {
    display: inline-block;
    white-space: pre;
    padding-right: 20px;

    font-size: 18px;
    letter-spacing: 1.5;
    color: #eee;
  }
`;

export default Scrolling;
