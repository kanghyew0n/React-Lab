import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const CursorFollow = () => {
  const ref = useRef(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isViewBlur, setIsViewBlur] = useState(false);

  const handleMouseMove = (e) => {
    if (!isViewBlur) return;
    setTimeout(() => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    }, 100);
  };

  return (
    <>
      <CursorFollowContainer
        onMouseEnter={() => setIsViewBlur(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsViewBlur(false)}
      >
        <Follower
          ref={ref}
          style={{
            top: `${mouseY}px`,
            left: `${mouseX}px`,
            display: isViewBlur ? "block" : "none",
          }}
        />
      </CursorFollowContainer>
    </>
  );
};

const CursorFollowContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Follower = styled.div`
  position: absolute;
  transform: translateX(-50%) translateY(-50%);

  width: 30px;
  height: 30px;
  border-radius: 100px;
  border: 1px solid #fdff9f;
`;

export default CursorFollow;
