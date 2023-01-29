import { MDBInput } from "mdb-react-ui-kit";
import { ChangeEvent } from "react";
import ioData from "../../../data/io.json";
import { setSearchText } from "../../../feature/filter/filterSlice";
import { useAppDispatch } from "../../../feature/hooks";
import TagBtn from "./TagBtn";

const Filter = () => {
  const dispatch = useAppDispatch();

  const handleOnSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(e.target.value));
  }

  return (
    <div className="mb-3">
      <MDBInput label="Search" type="search" onChange={handleOnSearchTextChange} />
      <div className="mt-3 horizontal-scroll">
        {ioData.availableTags.map((tagName, i) => <TagBtn key={i} tagName={tagName} />)}
      </div>
    </div>
  );
}

export default Filter;
