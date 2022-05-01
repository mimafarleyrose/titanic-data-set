import { ReactElement, useState } from "react";
import { Wrapper } from "./wrapper";

interface CarouselProps {
  items: ReactElement[];
}
export const Carousel = ({ items }) => {
  const [visisbleItem, setVisibleItem] = useState(0);

  const listOfItems = items.map((item, i) => (
    <div key={i} className={`${i !== visisbleItem ? "hidden" : ""}`}>
      {item}
    </div>
  ));

  const setNextItem = () => {
    const isLastItem = visisbleItem === items.length - 1;
  
    if (isLastItem) {
      return setVisibleItem(0);
    }
    return setVisibleItem(visisbleItem + 1);
  };

  return (
    <div>
      {listOfItems}
      <button onClick={setNextItem}>Next</button>
    </div>
  );
};
