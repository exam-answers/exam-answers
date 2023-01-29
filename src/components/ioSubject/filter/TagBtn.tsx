import { MDBBtn } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { addTag, removeTag } from "../../../feature/filter/filterSlice";
import { useAppDispatch } from "../../../feature/hooks";

interface TagBtnProps {
  tagName: string;
  isActive?: boolean;
}

const TagBtn = ({ tagName, isActive = false }: TagBtnProps) => {
  const [btnActive, setBtnActive] = useState(isActive);
  const dispatch = useAppDispatch();

  const handleToggleBtn = () => setBtnActive((prev) => !prev);

  useEffect(() => {
    if (btnActive) {
      dispatch(addTag(tagName));
    } else {
      dispatch(removeTag(tagName));
    }
  }, [btnActive, dispatch, tagName]);

  return (
    <MDBBtn
      className="m-1"
      color="primary"
      size="sm"
      outline={!btnActive}
      onClick={handleToggleBtn}
    >
      {tagName}
    </MDBBtn>
  );
};

export default TagBtn;
