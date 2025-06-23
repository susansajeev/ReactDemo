import React, { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import Counter from "./reducer_example/Counter";
import LoadingLaComp from "./lazyload/LoadingLazy";

//items and heading passing from other
interface ListgropProps {
  countries: string[];
  heading: string;
  onSelectItem: (country: string) => void;
}

function ListGroup({ countries, heading, onSelectItem }: ListgropProps) {
  // let selectedIndex = 0;
  const navigate = useNavigate();

  const moveToCountryList = () => {
    navigate("/userdata");
  };

  const movetoSSR = () => {
    navigate("/userdata");
  };

  const [selectedIndex, setSelectedIndex] = useState(-1);

  function listItemClick(
    item: string,
    index: any,
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) {
    setSelectedIndex(index);
    onSelectItem(item);
    console.log("Clicked " + item + " " + index, event);
  }
  const [showComponent, setShowComponent] = useState(false);

  // if (countries.length == 0) {
  //   return <p>No Data Found</p>;
  // }

  //const msg = countries.length == 0 ? <p>No Items found</p> : null;

  // const getMessage = () => {
  //   return countries.length === 0 ? <p>No Items found</p> : null;
  // };

  return (
    //React fragment
    <div
      style={{
        alignItems: "center",
        height: "100vh",
        margin: "40px",
      }}
    >
      <h4>{heading}</h4>
      {/* {getMessage()} */}
      {countries.length === 0 && <p>No Data found</p>}
      <ul className="list-group">
        {countries.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={(event) => listItemClick(item, index, event)}
          >
            {item}
          </li>
        ))}
      </ul>
      <br></br>
      <h3>Click to Load a Lazy Component</h3>
      <button onClick={() => setShowComponent(true)}>
        Load Lazy Component
      </button>
      {showComponent && (
        <Suspense fallback={<div>Loading...</div>}>
          <LoadingLaComp />
        </Suspense>
      )}
      <br></br>
      <button onClick={moveToCountryList}>Move to User List</button>

      <button onClick={movetoSSR}>Move to SSR</button>

      <br></br>
      <Counter></Counter>
    </div>
  );
}
export default ListGroup;
