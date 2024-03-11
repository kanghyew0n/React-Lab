import React, {
  useEffect,
  useState,
  useRef,
  useTransition,
  useCallback,
} from 'react';
import styled from 'styled-components';
import InputWrapper from '../components/common/input/InputWrapper';
import useScrollHeight from '../hooks/useScrollHeight';
import useThrottled from '../hooks/useThrottled';

const targetURL =
  'https://raw.githubusercontent.com/jason-chao/wordle-solver/main/english_words_original_wordle.txt';

const lettersPerPage = 70; // 한 번에 로드할 아이콘 수
const scrollThreshold = 500; // 추가 아이콘을 가져올 스크롤 임계값

const LettersFilter = () => {
  const [searchWord, setSearchWord] = useState('');
  const [originLetters, setOriginLetters] = useState([]);
  const [letters, setLetters] = useState([]);

  const letterContainerRef = useRef(null);
  const scrollHeight = useScrollHeight({
    ref: letterContainerRef?.current,
  });
  const [isPending, startTransition] = useTransition({
    timeoutMs: 300,
  });

  const handleChange = (word) => {
    setSearchWord(word);

    // 검색어 입력이 우선순위
    startTransition(() => {
      handleSearchLetters(word);
    });
  };

  const handleSearchLetters = (word) => {
    if (word === '') {
      return loadMoreLetters(0);
    }
    setLetters(originLetters.filter((letter) => letter.includes(word)));
  };

  const loadMoreLetters = (length) => {
    const currentLength = length ?? letters.length;
    const newLetters = originLetters.slice(
      currentLength,
      currentLength + lettersPerPage,
    );
    setLetters((prev) => [...prev, ...newLetters].sort());
  };

  const handleScroll = () => {
    const letterContainer = letterContainerRef.current;

    // letterContainer.scrollTop : 스크롤된 정도
    // letterContainer.clientHeight : overflow hidden 하면 보이는 스크롤 영역 높이
    // letterContainer.scrollHeight : overflow hidden에 가려진 원본 높이

    if (
      letterContainer.scrollTop + letterContainer.clientHeight >=
      letterContainer.scrollHeight - scrollThreshold
    ) {
      loadMoreLetters();
    }
  };

  useThrottled(
    () => {
      handleScroll();
    },
    500,
    [letterContainerRef, scrollHeight],
  );

  useEffect(() => {
    fetch(targetURL)
      .then((r) => r.text())
      .then((r) => setOriginLetters(r.split('\n').sort()));
  }, []);

  useEffect(() => {
    if (originLetters.length > 0) {
      loadMoreLetters();
    }
  }, [originLetters]);

  return (
    <FilterLettersContainer>
      <InputWrapper
        id="name"
        value={searchWord}
        type="text"
        onChange={(e) => handleChange(e.target.value)}
      >
        <InputWrapper.Input />
      </InputWrapper>
      <LettersContainer ref={letterContainerRef}>
        {letters.map((letter, idx) => (
          <span key={`item-${idx}`}>{letter}</span>
        ))}
      </LettersContainer>
    </FilterLettersContainer>
  );
};

const FilterLettersContainer = styled.div`
  overflow: hidden;
  height: calc(100vh - 80px - 50px);
`;

const LettersContainer = styled.div`
  width: 100%;
  height: 730px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  color: #fff;
  gap: 20px;
  overflow-y: scroll;

  span {
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 3px;
    border-radius: 3px;
  }

  /* 스크롤바의 폭 너비 */
  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 10px;
    border: 6px solid #000;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }
`;

export default LettersFilter;
