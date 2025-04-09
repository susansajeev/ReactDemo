import React, { useState } from "react";

//items and heading passing from other
interface ListgropProps {
  countries: string[];
  heading: string;
  onSelectItem: (country: string) => void;
}

function ListGroup({ countries, heading, onSelectItem }: ListgropProps) {
  // let selectedIndex = 0;

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

  // if (countries.length == 0) {
  //   return <p>No Data Found</p>;
  // }

  //const msg = countries.length == 0 ? <p>No Items found</p> : null;

  // const getMessage = () => {
  //   return countries.length === 0 ? <p>No Items found</p> : null;
  // };

  return (
    //React fragment
    <>
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
    </>
  );
}
export default ListGroup;
