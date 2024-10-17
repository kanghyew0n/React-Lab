import { useState, useEffect } from "react";
import styled from "styled-components";
import AgreementCheckBox from "./AgreementCheckBox";

const items = [
  {
    label: "[필수] 어쩌구 저쩌구",
    require: true,
  },
  {
    label: "[필수] 어쩌구 저쩌구",
    require: true,
  },
  {
    label: "[선택] 어쩌구 저쩌구",
    require: false,
  },
  {
    label: "[선택] 어쩌구 저쩌구",
    require: false,
  },
];


const AgreementGroup = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(
    new Array(items.length).fill(false)
  );
  const [requiredValidated, setRequiredValidated] = useState(false);
  const [isChildVisible, setIsChildVisible] = useState(false);

  const handleShowChildCheckbox = () => {
    setIsChildVisible(!isChildVisible);
  };

  const handleAllChecked = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);
    setCheckedItems(new Array(items.length).fill(newAllChecked));
  };

  const handleItemChange = (idx) => {
    const updatedCheckedItems = checkedItems.map((item, i) =>
      i === idx ? !item : item
    );
    setCheckedItems(updatedCheckedItems);
  };

  useEffect(() => {
    if (checkedItems.every((item) => item)) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [checkedItems]);

  useEffect(() => {
    const requiredItemLength = items.filter((item) => item.require).length;
    const isValid =
      items.filter((item, idx) => item.require && checkedItems[idx]).length ===
      requiredItemLength;

    setRequiredValidated(isValid);
  }, [checkedItems]);

  return (
    <GroupWrapper>
      <AgreementCheckBox
        id={0}
        label="전체선택"
        role="parent"
        checked={allChecked}
        isChildVisible={isChildVisible}
        onChange={handleAllChecked}
        handleShowChildCheckbox={handleShowChildCheckbox}
      />
      <CheckBoxGroup $isVisible={isChildVisible}>
        {checkedItems.map((item, idx) => (
          <AgreementCheckBox
            key={`checkbox-${idx}`}
            id={idx + 1}
            label={items[idx].label}
            checked={item}
            onChange={() => handleItemChange(idx)}
          />
        ))}
      </CheckBoxGroup>
      <button disabled={!requiredValidated}>제출</button>
    </GroupWrapper>
  );
};

const GroupWrapper = styled.div`
  width: 300px;
`;

const CheckBoxGroup = styled.div`
  height: ${(props) => (props.$isVisible ? "165px" : "0")};
  opacity: ${(props) => (props.$isVisible ? "1" : "0")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

export default AgreementGroup;
