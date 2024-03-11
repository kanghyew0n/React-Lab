import { useEffect, useState } from "react";

const useScrollSize = ({ ref }) => {
  const [scrollSize, setScrollSize] = useState(0);
  const scrollContainer = ref;

  useEffect(() => {
    function handleScroll() {
      const height = scrollContainer.scrollTop;
      setScrollSize(height);
    }

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [ref]);

  return scrollSize;
};

export default useScrollSize;
